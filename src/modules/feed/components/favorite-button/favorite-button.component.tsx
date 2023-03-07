import {FC} from 'react'

interface FavoriteButtonProps {
  count: number;
  extended?: boolean;
}

export const FavoriteButton: FC<FavoriteButtonProps>=({count, extended = false})=>{
  return(
  <button className='text-conduit-green text-sm py-1 px-2 rounded-buttonSm border-conduit-green text-center align-middle curser-pointer select-none border hover:text-white hover:bg-conduit-green focus:text-white focus:bg-conduit-darkGreen'>
    <i className='ion-heart'></i>
    <span className='ml-1 font-normal'>
      {extended && 'Favorite Article ('}
      {count}
      {extended && ')'}
    </span>
  </button>
)}