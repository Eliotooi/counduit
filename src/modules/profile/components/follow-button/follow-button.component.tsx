import { FC } from 'react'

interface FollowButtonProps {
  username: string;
}

export const FollowButton: FC<FollowButtonProps> =({username})=>{
  return(
    <button className='text-center text-conduit-gray-700 align-middle curser-pointer select-none border border-conduit-gray-700 py-1 px-2 text-sm rounded-buttonSm hover:bg-conduit-gray-400 focus:bg-conduit-gray-400 active:bg-conduit-gray-650'>
      <i className='ion-plus-round'/>
      &nbsp; Follow {username}
    </button>
  )
}