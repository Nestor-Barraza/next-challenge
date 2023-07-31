/* eslint-disable @next/next/no-sync-scripts */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'tailwindcss/tailwind.css';
import store from '@/store/index'; 
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Test Ecommerce - Technology Store</title>
        <meta name="description" content="Explore our wide range of technology products. Find the latest deals on electronics, gadgets, computers, and more." />
        <meta property="og:title" content="Your Ecommerce - Technology Store" />
        <meta property="og:description" content="Explore our wide range of technology products. Find the latest deals on electronics, gadgets, computers, and more." />
        <meta property="og:type" content="website" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
