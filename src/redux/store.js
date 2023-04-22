import { configureStore } from '@reduxjs/toolkit';
import filter from '../redux/slices/filterSlice';
import product from '../redux/slices/productSlice';
import auth from './slices/authSlice ';
import authReducer from './slices/authSlice '
import { authApi } from './function/authService';

export const store = configureStore({
  reducer: {
    filter,
    product,
    auth,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
