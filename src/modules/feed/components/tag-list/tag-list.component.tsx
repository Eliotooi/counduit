import {FC} from 'react'

interface TagListProps {}

export const TagList: FC<TagListProps> =()=>{
  return(
    <ul className='flex'>
      <li className='font-light mr-1 mb-0.2 px-tag rounded-tag text-date text-conduit-tag border-conduit-lightenGray border'>
        que
      </li>
      <li className='font-light mr-1 mb-0.2 px-tag rounded-tag text-date text-conduit-tag border-conduit-lightenGray border'>
        que
      </li>
      <li className='font-light mr-1 mb-0.2 px-tag rounded-tag text-date text-conduit-tag border-conduit-lightenGray border'>
        que
      </li>
      <li className='font-light mr-1 mb-0.2 px-tag rounded-tag text-date text-conduit-tag border-conduit-lightenGray border'>
        que
      </li>
    </ul>
  )
}
