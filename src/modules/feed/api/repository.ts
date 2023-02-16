import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../../../core/axios-base-query'
import { FEED_PAGE_SIZE } from '../consts';
import { FeedArticle, GlobalFeedIn } from './dto/global-feed.in'
import { PopularTags } from './dto/popular-tags.in';

interface GlobalFeedParams {
  page: number;
  tag: string | null
}

export interface FeedData {
  articles: FeedArticle[]
  articlesCount: number
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
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
      transformResponse: (response: GlobalFeedIn) => {
        return{
          articles: response.articles || [],
          articlesCount: response.articlesCount || 0,
        }
      }
    }),
    getPopularTags: builder.query<PopularTags, any>({
      query: () => ({
        url: '/tags',
      })
    })
  })
})

export const {useGetGlobalFeedQuery, useGetPopularTagsQuery} = feedApi