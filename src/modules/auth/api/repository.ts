import { createApi } from "@reduxjs/toolkit/query/react";
import { realWorldBaseQuery } from "../../../core/api/realworld-base-query";
import { SignUpOutDTO } from "./dto/sign-up.out";
import { SignUpInDTO } from "./dto/sign-up.in";

export const authoApi = createApi({
  reducerPath: 'authApi',
  baseQuery: realWorldBaseQuery,
  endpoints: (builder) =>({
    signUp: builder.query<SignUpInDTO, SignUpOutDTO['user']>({
      query: (args)=>({
        url: '/users',
        method: 'post',
        data: {
          user: args,
        },
      })
    })
  })
})

export const {useLazySignUpQuery} = authoApi