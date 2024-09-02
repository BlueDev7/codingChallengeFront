import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: null,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setSelectedProduct, setProducts } = productSlice.actions;
export default productSlice.reducer;
