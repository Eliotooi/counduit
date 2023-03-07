import { ComponentProps, FC } from 'react'
import { ArticaleAuthor, NameStyleEnum } from '../arcticale-author/arcticale-author.component'
import { FollowButton } from '../../../profile/components/follow-button/follow-button.component'
import { FavoriteButton } from '../favorite-button/favorite-button.component'
import { Author } from '../../api/dto/global-feed.in';

interface ArticaleMetaProps {
  authorNameStyle?: ComponentProps<typeof ArticaleAuthor>['nameStyle'];
  authorDirection?: ComponentProps<typeof ArticaleAuthor>['direction'];
  authorNameSize?: ComponentProps<typeof ArticaleAuthor>['nameSize'];
  author: Author;
  likes?: number;
  publishedAt: string;
  showActionButtons?: boolean;
}

export const ArticaleMeta: FC<ArticaleMetaProps> =({
    authorNameStyle = NameStyleEnum.LIGHT,
    author,
    publishedAt,
    likes,
    showActionButtons = true,
    authorDirection,
    authorNameSize,
  })=>{
  return(
    <div>
      <div className='inline-block'>
        <ArticaleAuthor 
          author={author} 
          publishedAt={publishedAt}
          nameStyle={authorNameStyle}
          direction={authorDirection}
          nameSize={authorNameSize}
        />
      </div>
      {showActionButtons && (
        <div className='inline-flex gap-4'>
          <FollowButton username={author.username} btnStyle='LIGHT'/>
          <FavoriteButton count={likes || 0} extended/>
        </div>
      )}
    </div>
  )
}