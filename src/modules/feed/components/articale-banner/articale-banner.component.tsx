import { FC } from 'react'
import { Container } from '../../../../common/components/container/container.components'
import { ArticaleMeta } from '../article-meta/article-meta.componet'
import { Author } from '../../api/dto/global-feed.in';

interface ArticaleBannerProps { 
  title: string;
  author: Author;
  likes: number;
  publishedAt: string;
}
export const ArticaleBanner: FC<ArticaleBannerProps> =({
    title,
    author, 
    likes,
    publishedAt
  })=>{
  return(
    <div className='bg-conduit-gray-1100 pt-8 pb-4 mb-8'>
      <Container>
        <h1 className='text-white text-articaleTitle font-semibold leading-articaleTitle mb-8'>
          {title}     
        </h1>
        <ArticaleMeta author={author} likes={likes} publishedAt={publishedAt}/>
      </Container>
    </div>
  )
}