import { configureStore } from '@reduxjs/toolkit';
import filter from '../redux/slices/filterSlice';
import product from '../redux/slices/productSlice';
import auth from './slices/authSlice ';
import wishlist from './slices/productSlice'
import { authApi } from './function/authService';
import { wishlistApi } from './function/authService';

export const store = configureStore({
  reducer: {
    filter,
    product,
    wishlist,
    auth,
    [authApi.reducerPath]: authApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(authApi.middleware)
    .concat(wishlistApi.middleware),
});
