import { useSelector } from 'react-redux';
import { CartState } from '../reducers/cart.reducer';
import { RootState } from '../reducers/root.reducer';
import ItemCart from './ItemCart';

function Cart() {
  const cart = useSelector<RootState, CartState>((root) => root.cart);
  return (
    <div className="grid grid-cols-1 gap-2">
      {cart.map((item, index) => (
        <ItemCart key={`item_${index}`} {...item} />
      ))}
    </div>
  );
}

export default Cart;
