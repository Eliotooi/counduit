import { FC } from "react"
import { ArticaleMeta } from "../article-meta/article-meta.componet"
import { Author } from "../../api/dto/global-feed.in";

interface CommentItemProps{
  body: string;
  author: Author;
  publishedAt: string
}

export const CommentItem: FC<CommentItemProps> = ({body, author, publishedAt})=>{
  return(
    <div className='border border-conduit-gray-250 rounded'>
      <div className='p-5'>
        <p>
          {body}
        </p>
      </div>
      <div className='border-t border-conduit-gray-250 bg-conduit-gray-150 py-3 px-5'>
        <ArticaleMeta
          authorNameStyle='GREEN'
          publishedAt={publishedAt}
          showActionButtons={false}
          author={author}
          authorDirection='ROW'
          authorNameSize='SM'
        />
      </div>
    </div>
  )
}




      