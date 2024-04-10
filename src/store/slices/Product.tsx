import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InterfaceProduct } from '../../type/type';

interface InitialStateType {
  allProducts: InterfaceProduct[];
  favoriteProduct: InterfaceProduct[];
}

const initialState: InitialStateType = {
  allProducts: [],
  favoriteProduct: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts(state, action: PayloadAction<InterfaceProduct[]>) {
      state.allProducts = action.payload;
    },
    addFavorites(state, action: PayloadAction<InterfaceProduct>) {
      state.favoriteProduct.push(action.payload);
    },
    removeFavoriteProduct(state, action: PayloadAction<InterfaceProduct>) {
      state.favoriteProduct = state.favoriteProduct.filter((f) => f.id !== action.payload.id);
    },
    removeProduct(state, action: PayloadAction<InterfaceProduct>) {
      state.allProducts = state.allProducts.filter((p) => p.id !== action.payload.id);
    },
  },
});
export const productSliceAction = productsSlice.actions;
export const productSliceReducer = productsSlice.reducer;
