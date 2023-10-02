import { createSlice } from "@reduxjs/toolkit";
// import { getProducts } from "./productsAction";
import { getProducts } from "./productsAction";
export const ACCOUNT_API = "http://35.239.251.89/";
export const PRODUCTS_API = "http://localhost:8000/products";

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
