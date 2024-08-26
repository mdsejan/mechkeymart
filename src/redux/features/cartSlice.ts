import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";
// Import the Product type

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
