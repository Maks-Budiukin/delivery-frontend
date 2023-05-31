import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getShopsThunk = createAsyncThunk(
  "shops/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: "/shops",
      });
      console.log(response.data.shops);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setActiveShopThunk = createAsyncThunk(
  "shops/setActive",
  async (shopID, thunkAPI) => {
    try {
      return shopID;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
