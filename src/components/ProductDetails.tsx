import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { addCartAction } from '../actions/cart.actions';
import { getProducts } from '../actions/product.actions';
import { RootState } from '../reducers/root.reducer';
import { Product } from '../types/poduct.interface';

function ProductDetails() {
  const { query } = useRouter();
  const product = useSelector<RootState, Product | undefined>((root) =>
    root.products.find((product) => product.id === +(query.id + ''))
  );

  const dispatch = useDispatch();

  if (!product) {
    dispatch(getProducts());
    return null;
  }

  const { category, description, id, image, price, rating, title } = product;

  return (
    <div className="border border-theme content-theme p-3 max-w-2xl w-full mx-auto">
      <div className="grid grid-cols-2 gap-2">
        <img className="w-full" src={image} />
        <div className="grid grid-cols-1 gap-2">
          <div>
            <h3>{title}</h3>
          </div>
          <div>
            <p>
              <b> Rate: </b>
              {rating.rate}
              <b> Count: </b>
              {rating.count}
            </p>
          </div>
          <div>
            <p>
              <b>Category: </b>
              {category}
            </p>
          </div>
          <div>
            <p>
              <b>Description: </b>
              {description}
            </p>
          </div>
          <div>
            <p>
              <b>Price</b>
              {price}
            </p>
          </div>

          <div>
            <button
              className="btn-main m-1"
              onClick={() => dispatch(addCartAction(product, 1))}
            >
              Add to Cart
            </button>
            <Link href={`/`}>
              <button className="btn-theme m-1">Back to list</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
