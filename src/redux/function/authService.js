import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://localhost:44389/',
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.userToken
        if (token) {
          headers.set('authorization', `Bearer ${token}`)  
          return headers
        }
      },
    }),
    endpoints: (builder) => ({
      getUserDetails: builder.query({
        query: () => ({
          url: 'api/auth/profile',
          method: 'GET',
        }),
      }),
    }),
  })
  

  export const { useGetUserDetailsQuery } = authApi