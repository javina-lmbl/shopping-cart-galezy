import type { NextPage } from 'next';
import Head from 'next/head';
import CartDetails from '../components/CartDetails';

const Cart: NextPage = () => (
  <>
    <Head>
      <title>Cart details</title>
    </Head>
    <CartDetails />
  </>
);

export default Cart;
