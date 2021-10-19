import { createSlice } from "@reduxjs/toolkit";

export const RdcProduct = createSlice({
  name: "product",
  initialState: {
    list:[],
  },
  reducers: {
    loadList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { loadList } = RdcProduct.actions;

export const productList = (state) => state.product.list;

export default RdcProduct.reducer;
