import { createApi } from '@reduxjs/toolkit/query/react';
import { realWorldBaseQuery } from '../../../core/api/realworld-base-query';
import { GetProfileIn} from './dto/get-profile.in';

interface ProfileParams {
  username: string;
}

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: realWorldBaseQuery,
  endpoints: (builder) => ({
    getProfile: builder.query<GetProfileIn, ProfileParams>({
      query: ({ username }) => ({
        url: `/profiles/${username}`,
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;