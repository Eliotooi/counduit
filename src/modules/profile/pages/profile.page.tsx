import { FC } from 'react'
import { ProfileBanner } from '../components/profile-banner/profile-banner.component'
import { Feed } from '../../feed/components/feed/feed.component'
import { useGetProfileFeedQuery } from '../../feed/api/repository'
import { usePageParam } from '../../feed/hooks/use-page-params.hook'
import { useLocation, useParams } from 'react-router-dom'
import { Container } from '../../../common/components/container/container.components'
import { FeedToggle } from '../../feed/components/feed-toggle/feed-toggle.component'

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> =()=>{
  const { page } = usePageParam()
  const { profile } = useParams()
  const { pathname } = useLocation()

  const { data, isLoading, isFetching, error } = useGetProfileFeedQuery({
    page,
    author: profile!,
    isFavorite: pathname.includes(`/${encodeURIComponent(profile!)}/favorites`),
  })

  const feedToggleItems =[ 
    {text: 'Favorites articles', 
    link: `/${encodeURIComponent(profile!)}/favorites`} ,
  ]

  return(
    <>
      <ProfileBanner />
      <Container>
      <FeedToggle 
        defaultText='My Articles'
        defaultLink={`/${encodeURIComponent(profile!)}`}
        items={feedToggleItems}
      />
      <Feed
        data={data} 
        isLoading={isLoading}
        isFetching={isFetching}
        error={error}   
      />
      </Container>
    </>
  )
}