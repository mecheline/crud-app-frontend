import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import {
  LoggedInUserProps,
  LoginProps,
  UserProps,
} from "../models/types.models";
const staggeredBaseQuery = retry(
  fetchBaseQuery({
    baseUrl: "https://crud-app-seven-gules.vercel.app/api/auth",
  }),
  {
    maxRetries: 3,
  }
);

export const authSlice = createApi({
  reducerPath: "api",
  baseQuery: staggeredBaseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation<void, UserProps>({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation<LoggedInUserProps, LoginProps>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = authSlice;
