import Link from 'next/link';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CartState } from '../reducers/cart.reducer';
import { RootState } from '../reducers/root.reducer';
import ItemCart from './ItemCart';

function Cart() {
  const cart = useSelector<RootState, CartState>((root) => root.cart);
  let total = useMemo(() => {
    let result = 0;

    cart.forEach((item) => {
      result += item.amount * item.product.price;
    });

    return result;
  }, [cart]);
  return (
    <div className="grid grid-cols-1 gap-2 ">
      {cart.map((item, index) => (
        <ItemCart key={`item_${index}`} {...item} />
      ))}
      <div className="p-4">
        <p>
          <b>Total: </b> $ {total}
        </p>
        <Link href={'/cart'}>
          <button className="btn-main w-full">Go to Pay</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
