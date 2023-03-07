import { FC } from 'react'
import { ArticaleAuthor, NameStyleEnum } from '../arcticale-author/arcticale-author.component'
import { FollowButton } from '../../../profile/components/follow-button/follow-button.component'
import { FavoriteButton } from '../favorite-button/favorite-button.component'
import { Author } from '../../api/dto/global-feed.in';

interface ArticaleMetaProps {
  authorNameStyle?: keyof typeof NameStyleEnum;
  author: Author;
  likes: number;
  publishedAt: string;
}

export const ArticaleMeta: FC<ArticaleMetaProps> =({
    authorNameStyle = NameStyleEnum.LIGHT,
    author,
    publishedAt,
    likes,
  })=>{
  return(
    <div>
      <div className='inline-block'>
        <ArticaleAuthor 
          author={author} 
          publishedAt={publishedAt}
          nameStyle={authorNameStyle}
        />
      </div>
      <div className='inline-flex gap-4'>
        <FollowButton username={author.username} btnStyle='LIGHT'/>
        <FavoriteButton count={likes} extended/>
      </div>
    </div>
  )
}