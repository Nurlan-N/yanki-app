import { createSlice } from '@reduxjs/toolkit';
import { registerUser,confirmationUser, userLogin, userData, userSubscribe } from '../function/authAction';

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
  loading: false,
  userInfo: null,
  userWishlist: [],
  userToken,
  error: null,
  login: false,
  success: false,
  message: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken');
      state.loading = false;
      state.login = false;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.login = false;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.login = true;
      state.userToken = payload;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [confirmationUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [confirmationUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.message = payload
      state.success = true;
    },
    [confirmationUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [userData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userSubscribe.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [userSubscribe.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.message = payload;
    },
    [userSubscribe.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
  },
});
export const { logout } = authSlice.actions;

export default authSlice.reducer;
