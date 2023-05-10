import { configureStore } from '@reduxjs/toolkit';
import filter from '../redux/slices/filterSlice';
import product from '../redux/slices/productSlice';
import auth from './slices/authSlice ';
import wishlist from './slices/productSlice';
import { authApi } from './function/authService';
import orders from './slices/orderSlice';
import orderItems from './slices/orderSlice';

export const store = configureStore({
  reducer: {
    filter,
    product,
    wishlist,
    orders,
    orderItems,
    auth,
    [authApi.reducerPath]: authApi.reducer,
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
