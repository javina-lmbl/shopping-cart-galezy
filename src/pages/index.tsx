import type { NextPage } from 'next';
import Head from 'next/head';
import ProductList from '../components/ProductList';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Products</title>
    </Head>
    <ProductList />
  </>
);

export default Home;
