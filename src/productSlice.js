import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = { ...action.payload, quantity: 1 };
      state.products.push(newProduct);
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity } = productSlice.actions;
export default productSlice.reducer;

