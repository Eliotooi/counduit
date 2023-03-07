import { FC } from 'react'
import { ArticaleBanner } from '../components/articale-banner/articale-banner.component'
import { Container } from '../../../common/components/container/container.components'
import { TagList } from '../components/tag-list/tag-list.component'
import { ArticaleMeta } from '../components/article-meta/article-meta.componet'
import { useGetSingleArticleQuery } from '../api/repository'
import { useParams } from 'react-router-dom'
import { CommentsList } from '../components/comments-list/comments-list.component'

interface ArticalePageProps {}

const convertNewLines = (body: string) => {
  return body.split('\\n').join('<br />')
}

export const ArticalePage: FC<ArticalePageProps> =()=>{
  const { slug } = useParams()

  const {data} = useGetSingleArticleQuery({ slug: slug! })

  if(!data){
    return <h1>Article not found</h1>
  } 

  return(
    <>
      <ArticaleBanner 
        title={data?.article.title}
        author={data.article.author} 
        likes={data.article.favoritesCount}
        publishedAt={data.article.createdAt}
      />
      <Container>
        <div className='pb-8 border-b mb-6'>
          <p className='text-articaleBody leading-articaleBody font-sourceSelif mb-8'
            dangerouslySetInnerHTML={{__html: convertNewLines(data.article.body)}}
          />
          <TagList list={data.article.tagList}/>
        </div>
        <div className='flex justify-center'>
          <ArticaleMeta 
            authorNameStyle='GREEN'
            publishedAt={data.article.createdAt}
            likes={data.article.favoritesCount}
            author={data.article.author}
          />
        </div>  
        <CommentsList />
      </Container>
    </>
  )
}