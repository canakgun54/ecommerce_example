import { configureStore } from "@reduxjs/toolkit";
import product from "./rdcProduct";
import card from "./rdcCard";

export const Store = configureStore({
  reducer: {
    product: product,
    card: card,
  },
});
