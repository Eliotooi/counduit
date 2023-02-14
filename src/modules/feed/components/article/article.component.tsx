import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FavoriteButton } from '../favorite-button/favorite-button.component'
import { TagList } from '../tag-list/tag-list.component'


interface ArticleProps {}

export const Article: FC<ArticleProps> = () =>{
  return(
    <article>
      <div className='border-t border-black/10 py-6'>
          <div className='mb-4 font-light flex'>
            <Link to='/@eliot'>
              <img 
                src='https://i.pinimg.com/564x/ad/68/93/ad6893323c4ae1bb6722dec43e78a2c8.jpg'
                alt='eliot avatar'
                className='inline-block h-8 w-8 rounded-full'
              />
            </Link>
            <div className='mr-6 ml-0.3 leading-4 inline-flex flex-col'>
              <Link to='/@eliot' className='font-medium'>
                Koru Kun
              </Link>
              <span className='text-conduit-gray text-date'>
                9 october, 2019
              </span>
            </div>
            <FavoriteButton/>
          </div>   
          <Link to='/article/qwert' className='hover:no-underline'>
            <h1 className='mb-1 font-semibold text-2xl text-conduit-black'>
              Some title
            </h1>
            <p className='text-conduit-darkGray font-light mb-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dolor cum corporis ipsa, ea pariatur dicta hic, repudiandae quis quisquam facilis qui dolorem sed 
              veniam harum quibusdam expedita. Ad, similique?
            </p>
            <div className='flex justify-between'>
              <span className='text-conduit-gray text-date font-light'>
                Read more...
              </span>
              <TagList />
            </div>
          </Link> 
      </div>
    </article>
  )
}