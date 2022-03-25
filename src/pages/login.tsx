import type { NextPage } from 'next';
import Head from 'next/head';
import Login from '../components/Login';

const LoginPage: NextPage = () => (
  <>
    <Head>
      <title>Login</title>
    </Head>
    <Login />
  </>
);

export default LoginPage;
