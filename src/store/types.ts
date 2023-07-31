import store from './index'

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export interface Product {
  [key: string]: any; 
    id: number;
    title: string;
    description: string;
    price: number;
    currency: string;
    image: string;
    rating: number;
  }
  