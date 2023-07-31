import {  Product } from '../store/types';
import { fetchProductsFulfilled, fetchProductsRejected, fetchProductsPending} from '../slice/slice';
import Store from '../store/index';
import axios from 'axios';


export const fetchProducts = async () => {
  Store.dispatch(fetchProductsPending());

  try {
    const response = await axios.get<Product[]>('http://localhost:3000/api/product');
    Store.dispatch(fetchProductsFulfilled(response.data));
    return response.data;
  } catch (error:unknown) {
    if (error instanceof Error) {
        Store.dispatch(fetchProductsRejected(error.message ?? 'An unknown error occurre'));
        console.error('Error fetching products:', error);
        throw error;
      } else {
        console.error('Error fetching products:', error);
        throw new Error('An unknown error occurred');
      }
}
};

