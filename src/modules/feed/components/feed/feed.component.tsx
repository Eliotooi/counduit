import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { useSearchParams } from 'react-router-dom';
import { Container } from '../../../../common/components/container/container.components'
import { FEED_PAGE_SIZE } from '../../consts'
import { ArticleList } from '../article-list/article-list.component'
import { FeedToggle } from '../feed-toggle/feed-toggle.component'
import { serializeSearchParams } from '../../../../utils/router';
import { TagCloud } from '../tag-cloud/tag-cloud.component';
import { FeedData } from '../../api/repository';

interface FeedProps {
  isLoading: boolean
  isFetching: boolean
  error: any
  data?: FeedData
}

export const Feed: FC<FeedProps>=({ isLoading, isFetching, error, data })=>{
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0

  const handlePageChange = ({selected}: {selected: number})=>{
    setSearchParams(serializeSearchParams({page: String(selected)}))
  }
  
  if(isLoading || isFetching){
    return(
      <Container>
        Feed Loading...
      </Container>
    )
  }

  if(error){
    return(
      <Container>
        Error while loading feed
      </Container>
    )
  }

  return(
    <Container>
      <FeedToggle />
      <div className='flex'>
        <div className='w-3/4'>
          <ArticleList list={data?.articles || []} />
          <div className='my-6'>
          <ReactPaginate 
            pageCount={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
            pageRangeDisplayed={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
            previousLabel={null}
            nextLabel={null}
            containerClassName="flex my-4"
            pageClassName='group'
            pageLinkClassName='p-3 text-conduit-green bg-white border border-conduit-gray-300 -ml-px group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r hover:bg-conduit-gray-200'
            activeClassName='active group'
            activeLinkClassName='group-[.active]:bg-conduit-green group-[.active]:text-white group-[.active]:border-conduit-green'
            onPageChange={handlePageChange}
            forcePage={page}        
          />
        </div>
        </div>
        <div className='w-1/4 pl-3'>
          <TagCloud />
        </div>
      </div>
    </Container>
  )
}