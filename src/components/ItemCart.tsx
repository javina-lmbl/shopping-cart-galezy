import { useDispatch } from 'react-redux';
import { addCartAction } from '../actions/cart.actions';
import { CartItem } from '../reducers/cart.reducer';

interface ItemCartProps extends CartItem {}

function ItemCart({ product, amount }: ItemCartProps) {
  const dispatch = useDispatch();
  const { image, title, price } = product;
  return (
    <div className="border border-theme content-theme p-3 grid grid-cols-3 gap-2 ">
      <img src={image} />
      <div className="col-span-2">
        <p>{title}</p>
        <p>
          <b>Price</b>
          {price}
        </p>
        <p>
          <button
            className="btn-main m-2"
            onClick={() => dispatch(addCartAction(product, -1))}
          >
            -
          </button>
          {amount}
          <button
            className="btn-main m-2"
            onClick={() => dispatch(addCartAction(product, 1))}
          >
            +
          </button>
        </p>
      </div>
    </div>
  );
}

export default ItemCart;
