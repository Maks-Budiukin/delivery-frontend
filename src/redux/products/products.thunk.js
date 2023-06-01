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

export const ClearCartThunk = createAsyncThunk(
  "products/ClearCart",
  async (_, thunkAPI) => {
    try {
      const clearedCart = [];
      return clearedCart;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeItemCountThunk = createAsyncThunk(
  "products/ChangeItemCount",
  async (product, thunkAPI) => {
    try {
      const { products } = thunkAPI.getState();
      const filteredCart = products.cart.map((item) => {
        if (item.id === product.id) {
          item = {
            ...item,
            count: product.count,
          };
          return item;
        }
        return item;
      });

      return filteredCart;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createOrderThunk = createAsyncThunk(
  "products/createOrder",
  async (order, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: "/orders",
        data: order,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
