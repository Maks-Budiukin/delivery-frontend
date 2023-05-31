import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsThunk = createAsyncThunk(
  "products/getByShop",
  async (shopID, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `/products/${shopID}`,
      });
      console.log(response.data.products);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
