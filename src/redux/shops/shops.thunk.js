import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const getShopsThunk = createAsyncThunk(
  "shops/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: "/shops",
      });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
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
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
