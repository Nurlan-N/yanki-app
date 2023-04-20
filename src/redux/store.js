import { configureStore } from '@reduxjs/toolkit';
import filter from '../redux/slices/filterSlice';
import product from '../redux/slices/productSlice';
import auth from './slices/authSlice '

export const store = configureStore({
  reducer: {
    filter,
    product,
    auth,
  },
});
