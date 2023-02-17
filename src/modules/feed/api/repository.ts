import { createApi } from '@reduxjs/toolkit/query/react'
import { FEED_PAGE_SIZE } from '../consts';
import { FeedArticle } from './dto/global-feed.in'
import { PopularTags } from './dto/popular-tags.in';
import { transformResponse } from './utils';
import { realWorldBaseQuery } from '../../../core/api/realworld-base-query';

interface BaseFeedParams {
  page: number
}

interface GlobalFeedParams extends BaseFeedParams {
  tag: string | null
}

interface ProfileFeedParams extends BaseFeedParams {
  author: string
  isFavorite?: boolean
}

export interface FeedData {
  articles: FeedArticle[]
  articlesCount: number
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: realWorldBaseQuery,
  endpoints: (builder)=> ({
    getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
      query: ({page, tag}) => ({
        url: '/articles',
        params:{
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          tag,
        }
      }),
      transformResponse,
    }),
    getProfileFeed: builder.query<FeedData, ProfileFeedParams>({
      query: ({page, author, isFavorite=false}) => ({
        url: '/articles',
        params:{
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          author: isFavorite ? undefined : author,
          favorited: !isFavorite ? undefined : author,
        }
      }),
      transformResponse,
    }),
    getPopularTags: builder.query<PopularTags, any>({
      query: () => ({
        url: '/tags',
      })
    })
  })
})

export const {
  useGetGlobalFeedQuery,
  useGetPopularTagsQuery,
  useGetProfileFeedQuery,
} = feedApi