import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export const fetchProduct = createAsyncThunk('product/fetchProductStatus', async (params) => {
  const { currentPage, categoryId } = params;
  const { data } = await axios.get(
    `https://localhost:44389/api/product?page=${currentPage}&limit=8&categoryId=${categoryId}`,
  );
  return data;
});
export const fechWishlist = createAsyncThunk('wishlist/fetchWishlistStatus', async () => {
  const token = localStorage.getItem('userToken');
  const { data } = await axios.get(`https://localhost:44389/api/wishlist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
});

const initialState = {
  pageCount: 0,
  productId: 0,
  products: [],
  wishlist: [],
  favorites: false,
  wishlistStatus: 'loading',
  status: 'loading',
};
const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    setItems(state, action) {
      state.products = action.payload;
    },
    setProductId(state, action) {
      state.productId = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setFavorites(state, action) {
      state.favorites = action.payload;
    },
  },
  extraReducers: {
    [fetchProduct.pending]: (state, action) => {
      state.status = 'loading';
      state.products = [];
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.products = action.payload.product;
      state.pageCount = action.payload.count;
      state.status = 'success';
    },
    [fetchProduct.rejected]: (state, action) => {
      state.status = 'error';
      state.products = [];
    },
    [fechWishlist.pending]: (state, action) => {
      state.wishlistStatus = 'loading';
      state.wishlist = [];
    },
    [fechWishlist.fulfilled]: (state, action) => {
      //console.log(action.payload);
      state.wishlist = action.payload;
      state.wishlistStatus = 'success';
    },
    [fechWishlist.rejected]: (state, action) => {
      state.wishlistStatus = 'error';
      state.wishlist = [];
    },
  },
});

export const { setItems, setProductId, setPageCount, setFavorites } = productSlice.actions;

export default productSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   productId: 0,
// };

// export const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     setProductId(state, action) {
//       state.productId = action.payload;
//     },
//   },
// });

// export const { setProductId } = productSlice.actions;

// export default productSlice.reducer;
