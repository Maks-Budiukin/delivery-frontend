import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://delivery-muvr.onrender.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const regThunk = createAsyncThunk(
  "user/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: "/auth/register",
        data: credentials,
      });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: "/auth/login",
        data: credentials,
      });

      token.set(response.data.user.token);
      return response.data.user;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "user/logout",
  async (_, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: "/auth/logout",
      });
      token.unset();
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.token);

    try {
      const response = await axios.get("/auth/current");
      return response.data.user;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOrdersThunk = createAsyncThunk(
  "auth/getOrders",
  async (id, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `/orders/${id}`,
      });

      return response.data.orders;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
