import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_API } from "./productsSlice";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await axios.get(PRODUCTS_API);
    return data;
  }
);
