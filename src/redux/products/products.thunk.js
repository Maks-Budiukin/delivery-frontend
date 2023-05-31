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

export const AddToCartThunk = createAsyncThunk(
  "products/addToCart",
  async (product, thunkAPI) => {
    try {
      return product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const RemoveFromCartThunk = createAsyncThunk(
  "products/RemoveFromCart",
  async (id, thunkAPI) => {
    try {
      const { products } = thunkAPI.getState();
      const filteredCart = products.cart.filter((product) => product.id !== id);

      return filteredCart;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
