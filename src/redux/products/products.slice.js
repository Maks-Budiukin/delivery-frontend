import { createSlice } from "@reduxjs/toolkit";
import { productsInitState } from "./products.init-state";
import { getProductsThunk } from "./products.thunk";

const productsSlice = createSlice({
  name: "products",
  initialState: productsInitState,

  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => state)
      .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
        state.products = [...payload.products];
      })
      .addCase(getProductsThunk.rejected, (state, { payload }) => state);
  },
});

export const productsReducer = productsSlice.reducer;
