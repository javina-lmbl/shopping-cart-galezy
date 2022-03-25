import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/root.reducer';
import ItemCart from './ItemCart';

function CartDetails() {
  const router = useRouter();
  const { cart, auth } = useSelector<RootState, RootState>((root) => root);

  let total = useMemo(() => {
    let result = 0;

    cart.forEach((item) => {
      result += item.amount * item.product.price;
    });

    return result;
  }, [cart]);

  useEffect(() => {
    if (!auth.user) {
      window.localStorage.setItem('prevPath', router.pathname);
      router.push('/login');
    }
  }, [auth]);

  if(!auth.user){
    return null;
  }

  return (
    <div className="max-w-4xl w-full mx-auto">
      <div className="my-2 p-4 flex border border-theme content-theme ">
        <p>
          <b>Total: </b> $ {Math.trunc(total * 100) / 100}
        </p>
        <div className="ml-auto">
          <Link href={'/'}>
            <button className="btn-theme">Back to products</button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {cart.map((item) => (
          <ItemCart key={`product_${item.product.id}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CartDetails;
