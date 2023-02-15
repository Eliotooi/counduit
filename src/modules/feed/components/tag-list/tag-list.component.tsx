import {FC} from 'react'

interface TagListProps {
  list: string[];
}

export const TagList: FC<TagListProps> =({list})=>{
  return(
    <ul className='flex'>
      {list.map((tag)=>(
        <li className='font-light mr-1 mb-0.2 px-tag rounded-tag text-date text-conduit-tag border-conduit-lightenGray border' key={tag}>
          {tag}
        </li>
      ))} 
    </ul>
  )
}
