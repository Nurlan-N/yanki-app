import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProductStatus', async (params) => {
  const { currentPage, categoryId, sort } = params;
  const { data } = await axios.get(
    `http://217.76.63.20:44389/api/product?page=${currentPage}&limit=8&categoryId=${categoryId}&sort=${sort}`,
  );
  return data;
});
export const fetchWishlist = createAsyncThunk('wishlist/fetchWishlistStatus', async () => {
  const { data } = await axios.get(`http://217.76.63.20:44389/api/wishlist`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });
  return data;
});
export const fetchBasket = createAsyncThunk('basket/fetchBasketStatus', async () => {
  const { data } = await axios.get(`http://217.76.63.20:44389/api/Basket`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });
  return data;
});

const initialState = {
  pageCount: 0,
  productId: 0,
  products: [],
  product: {},
  wishlist: [],
  basket: [],
  favorites: false,
  wishlistStatus: 'loading',
  basketStatus: 'loading',
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
    setProduct(state, action) {
      state.product = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'loading';
      state.products = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload.product;
      state.pageCount = action.payload.count;
      state.status = 'success';
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'error';
      state.products = [];
    },
    [fetchWishlist.pending]: (state, action) => {
      state.wishlistStatus = 'loading';
      state.wishlist = [];
    },
    [fetchWishlist.fulfilled]: (state, action) => {
      state.wishlist = action.payload;
      state.wishlistStatus = 'success';
    },
    [fetchWishlist.rejected]: (state, action) => {
      state.wishlistStatus = 'error';
      state.wishlist = [];
    },
    [fetchBasket.pending]: (state, action) => {
      state.basketStatus = 'loading';
      state.basket = [];
    },
    [fetchBasket.fulfilled]: (state, action) => {
      state.basket = action.payload;
      state.basketStatus = 'success';
    },
    [fetchBasket.rejected]: (state, action) => {
      state.basketStatus = 'error';
      state.basket = [];
    },
  },
});

export const { setItems, setProductId, setPageCount, setFavorites, setProduct } =
  productSlice.actions;

export default productSlice.reducer;
