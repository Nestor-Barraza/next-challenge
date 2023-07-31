import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../store/types';

interface ProductState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string;
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductsPending: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    fetchProductsFulfilled: (state, action: PayloadAction<Product[]>) => {
      state.status = 'succeeded';
      state.products = action.payload;
      state.error = '';
    },
    fetchProductsRejected: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  }
});


export const { fetchProductsPending, fetchProductsFulfilled, fetchProductsRejected } = productSlice.actions;

export default productSlice.reducer;
