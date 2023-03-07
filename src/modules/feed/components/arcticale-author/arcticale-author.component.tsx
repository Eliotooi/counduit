import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Author } from '../../api/dto/global-feed.in'
import { DateTime } from 'luxon';
import clsx from 'clsx';

export enum NameStyleEnum {
  LIGHT = 'LIGHT',
  GREEN = 'GREEN',
}

enum MetaDirectionEnum {
  ROW = 'ROW',
  COL = 'COL',
}

enum NameSizeEnum {
  SM = 'SM',
  BASE = 'BASE',
}

interface ArticaleAuthorProps {
  author: Author;
  publishedAt: string;
  nameStyle?: keyof typeof NameStyleEnum;
  direction?: keyof typeof MetaDirectionEnum;
  nameSize?: keyof typeof NameSizeEnum;
}

export const ArticaleAuthor: FC<ArticaleAuthorProps> =({
  author,
  publishedAt,
  nameStyle = NameStyleEnum.GREEN,
  direction = MetaDirectionEnum.COL,
  nameSize = NameSizeEnum.BASE,
  })=>{
  const usernameClases = clsx('font-medium', {
    'text-white hover:text-white': nameStyle === NameStyleEnum.LIGHT,
    'text-date': nameSize === NameSizeEnum.SM,
  })

  const metaClases = clsx('mr-6 ml-0.3 leading-4 inline-flex', {
    'flex-row items-center gap-2': direction === MetaDirectionEnum.ROW,
    'flex-col': direction === MetaDirectionEnum.COL,
  })

  const imageClasses = clsx('inline-block rounded-full', {
    'h-8 w-8': nameSize === NameSizeEnum.BASE,
    'h-5 w-5': nameSize === NameSizeEnum.SM,
  })

  return(
    <div className='flex'>
      <Link to={`/${author.username}`}>
        <img 
          src={author.image}
          alt={`/${author.username} avatar`}
          className={imageClasses}
        />
      </Link>
      <div className={metaClases}>
        <Link to={`/${author.username}`} className={usernameClases}>
          {author.username}
        </Link>
        <span className='text-conduit-gray-500 text-date'>
          {DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATE_FULL)}
        </span>
      </div>
    </div>
  )
}





