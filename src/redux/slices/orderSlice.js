import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/// User JWT Token
const token = localStorage.getItem('userToken');

export const fechOrders = createAsyncThunk('order/fechOrders', async () => {
  const { data } = await axios.get(`https://localhost:44389/api/order`, {
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
    [fechOrders.pending]: (state, action) => {
      state.status = 'loading';
      state.orders = [];
    },
    [fechOrders.fulfilled]: (state, action) => {
      state.orders = action.payload;
      state.status = 'success';
    },
    [fechOrders.rejected]: (state, action) => {
      state.status = 'error';
      state.orders = [];
    },
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
