import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

export const RdcCard = createSlice({
  name: "card",
  initialState: {
    list: [],
  },
  reducers: {
    addCard: (state, action) => {
      const product = state.list.find((x) => x.id === action.payload.id);
      if (!product) {
        state.list.push({ id: action.payload.id, count: 1 });
      } else {
        state.list.map((x) => {
          if (x.id === product.id) {
            x.count++;
          }
        });
      }
      message.info("Sepetinize " + action.payload.title + " ürünü eklendi.");
    },
    deleteCard: (state, action) => {
      const product = state.list.find((x) => x.id === action.payload.id);
      if (product && product.count === 1) {
        state.list = state.list.filter((x) => x.id !== action.payload.id);
      } else if (product) {
        state.list.map((x) => {
          if (x.id === action.payload.id) {
            x.count--;
          }
        });
      } else {
        message.warning(
          "Sepetinizde " + action.payload.title + " ürünü bulunmamaktadır."
        );
      }
    },
    clearCard: (state) => {
      state.list = [];
    },
  },
});

export const { addCard, deleteCard, clearCard } = RdcCard.actions;

export const cardList = (state) => state.card.list;

export default RdcCard.reducer;
