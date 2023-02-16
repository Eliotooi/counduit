import { FC } from 'react'
import { Container } from '../../../../common/components/container/container.components'
import { FollowButton } from '../follow-button/follow-button.component'

interface ProfileBannerProps {}

export const ProfileBanner: FC<ProfileBannerProps> =()=>{
  return(
    <div className='bg-conduit-gray-100 pt-8 pb-4'>
      <Container>
        <div>
          <img 
          src='https://i.pinimg.com/474x/5a/c2/3a/5ac23a4370538a282fdf8a0d4f2d0a3e.jpg' 
          className='w-25 h-25 rounded-full mx-auto mb-4'
          alt='username avatar'
          />
          <h2 className='text-center font-bold text-2xl'>
            Magda Parry
          </h2>
        </div>
        <div className='flex justify-end'>
          <FollowButton />
        </div>
      </Container>
    </div>
  )
}