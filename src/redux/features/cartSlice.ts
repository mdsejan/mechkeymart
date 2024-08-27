import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types";

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);

      if (existingItem) {
        if (
          existingItem.quantity + product.quantity <=
          product.availableQuantity
        ) {
          existingItem.quantity += product.quantity;
        } else {
          alert("You cannot add more than the available stock!");
        }
      } else {
        state.items.push(product);
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) => {
      const { _id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);

      if (
        existingItem &&
        quantity <= existingItem.availableQuantity &&
        quantity >= 1
      ) {
        existingItem.quantity = quantity;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
