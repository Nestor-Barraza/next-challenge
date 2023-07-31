import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slice/slice'; 

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;


