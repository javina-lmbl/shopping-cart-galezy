import type { NextPage } from 'next';
import Head from 'next/head';
import ProductDetails from '../../components/ProductDetails';

const Details: NextPage = () => (
  <>
    <Head>
      <title>Product details</title>
    </Head>
    <ProductDetails />
  </>
);

export default Details;
