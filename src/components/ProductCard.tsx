import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addCartAction } from '../actions/cart.actions';
import { Product } from '../types/poduct.interface';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const { image, title, price } = product;
  return (
    <div className="border border-theme content-theme p-3">
      <img className="w-auto max-h-44 mx-auto" src={image} />
      <div>
        <p>{title}</p>
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
        <Link href={`/product/${product.id}`}>
          <button className="btn-theme m-1">Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
