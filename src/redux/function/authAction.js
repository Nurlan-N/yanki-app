import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'https://localhost:44389';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        `${backendURL}/api/auth/register`,
        data,
        config,
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${backendURL}/api/auth/login`,
        { email, password },
        config
      )
      const response = await axios.get(
        `${backendURL}/api/auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${data}`,
          },
        }
        
      ) 
      localStorage.setItem('userToken', data)
      localStorage.setItem('userData', response.data)
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message('test'))
      } else {
        return rejectWithValue(error.message('test2'))
      }
    }
  }
);


