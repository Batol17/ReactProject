import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(item => item.id === action.payload.id);
      if (!product) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload.id);
    },
    increment: (state, action) => {
      const product = state.products.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity += 1; 
      }
    },
    decrement: (state, action) => {
      const product = state.products.find(item => item.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    }
  },
});

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
