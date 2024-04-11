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
      if (state.favoriteProduct.find(({ id }) => id === action.payload.id)) {
        state.favoriteProduct = state.favoriteProduct.filter(
          (item) => item.id !== action.payload.id,
        );
        return;
      }
      state.favoriteProduct.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<InterfaceProduct>) {
      state.allProducts = state.allProducts.filter((p) => p.id !== action.payload.id);
    },
  },
});
export const productSliceAction = productsSlice.actions;
export const productSliceReducer = productsSlice.reducer;
