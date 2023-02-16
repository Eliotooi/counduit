import { FC } from 'react'
import { Banner } from '../../../common/components/banner/banner.component'
import { Feed } from '../components/feed/feed.component'
import { useSearchParams } from 'react-router-dom'
import { useGetGlobalFeedQuery } from '../api/repository'

interface GlobalFeedPageProps {}

export const GlobalFeedPage: FC<GlobalFeedPageProps> =()=>{
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({ 
    page,
    tag: searchParams.get('tag'), 
  })
  
  return(
    <>
      <Banner />
      <Feed 
        data={data}
        isLoading={isLoading}
        error={error}
        isFetching={isFetching}
      />
    </>
  )
}