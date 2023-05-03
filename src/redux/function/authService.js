import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const apiBaseUrl = 'https://localhost:44389/';

const baseQueryFn = (headers, { getState }) => {
  const token = getState().auth.userToken;
  if (token) {
    headers.set('authorization', `Bearer ${token}`);
    return headers;
  }
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl, prepareHeaders: baseQueryFn }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({ url: 'api/auth/profile', method: 'GET' }),
    }),
  }),
});

export const wishlistApi = createApi({
  reducerPath: 'wishlistApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl, prepareHeaders: baseQueryFn }),
  endpoints: (builder) => ({
    getUserWishlist: builder.query({
      query: () => ({ url: 'api/wishlist', method: 'GET' }),
    }),
  }),
});

export const { useGetUserDetailsQuery } = authApi;
export const { useGetUserWishlistQuery } = wishlistApi;
