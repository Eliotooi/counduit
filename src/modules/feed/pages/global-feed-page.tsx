import { FC } from 'react'
import { Banner } from '../../../common/components/banner/banner.component'
import { Feed } from '../components/feed/feed.component'
import { useSearchParams } from 'react-router-dom'
import { useGetGlobalFeedQuery } from '../api/repository'
import { usePageParam } from '../hooks/use-page-params.hook'
import { Container } from '../../../common/components/container/container.components'
import { FeedToggle } from '../components/feed-toggle/feed-toggle.component'
import { TagCloud } from '../components/tag-cloud/tag-cloud.component'

interface GlobalFeedPageProps {}

export const GlobalFeedPage: FC<GlobalFeedPageProps> =()=>{
  const [searchParams] = useSearchParams()
  const { page } = usePageParam()

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({ 
    page,
    tag: searchParams.get('tag'), 
  })
  
  return(
    <>
      <Banner />
      <Container>
        <FeedToggle />
        <div className='flex'>
          <div className='w-3/4'>
            <Feed 
              data={data}
              isLoading={isLoading}
              error={error}
              isFetching={isFetching}
            />
          </div>
          <div className='w-1/4 pl-3'>
            <TagCloud />
          </div>
        </div>
        
      </Container>
    </>
  )
}