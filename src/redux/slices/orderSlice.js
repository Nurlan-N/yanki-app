import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/// User JWT Token
const token = localStorage.getItem('userToken');

export const fetchOrders = createAsyncThunk('order/fetchOrders', async () => {
  const { data } = await axios.get(`http://217.76.63.20:44389/api/order/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
});
export const fetchAllOrders = createAsyncThunk('order/fetchAllOrders', async () => {
  const { data } = await axios.get(`http://217.76.63.20:44389/api/order`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
});

const initialState = {
  orders: null,
  orderItems: [],
  allOrders: [],
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
    [fetchAllOrders.pending]: (state, action) => {
      state.status = 'loading';
      state.allOrders = [];
    },
    [fetchAllOrders.fulfilled]: (state, action) => {
      state.allOrders = action.payload;
      state.status = 'success';
    },
    [fetchAllOrders.rejected]: (state, action) => {
      state.status = 'error';
      state.allOrders = [];
    },
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
