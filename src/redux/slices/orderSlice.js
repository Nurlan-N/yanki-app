import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/// User JWT Token
const token = localStorage.getItem('userToken');

export const fetchOrders = createAsyncThunk('order/fetchOrders', async () => {
  const { data } = await axios.get(`https://localhost:44389/api/order/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
});

const initialState = {
  orders: null,
  orderItems: [],
  status: 'loading',
};
const orderSlice = createSlice({
  name: 'order',
  initialState,

  reducers: {},
  extraReducers: {
    [fetchOrders.pending]: (state, action) => {
      state.status = 'loading';
      state.orders = [];
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.orders = action.payload;
      state.status = 'success';
    },
    [fetchOrders.rejected]: (state, action) => {
      state.status = 'error';
      state.orders = [];
    },
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
