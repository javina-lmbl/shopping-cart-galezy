import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/product.actions';
import { productsState } from '../reducers/products.reducer';
import { RootState } from '../reducers/root.reducer';
import FilterProductsForm from './FilterProductsForm';
import ProductCard from './ProductCard';

function ProductList() {
  let products = useSelector<RootState, productsState>((root) => root.products);
  let { query } = useRouter();

  let [productsToDisplay, setProductsToDisplay] = useState(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const { category, _search, _sort } = query;
    setProductsToDisplay(
      products
        .filter((product) => {
          let flag = true;
          if (category) {
            flag = product.category === category;
          }
          if (_search) {
            const searchUpper = _search.toString().toUpperCase();
            flag =
              product.title.toUpperCase().includes(searchUpper) ||
              product.description.toUpperCase().includes(searchUpper);
          }
          return flag;
        })
        .sort((a, b) => {
          let result = 0;
          if (_sort === 'rate') {
            result = a.rating.rate - b.rating.rate;
          }
          if (_sort === 'price') {
            result = a.price - b.price;
          }
          return result;
        })
    );
  }, [products, query]);

  return (
    <div className="max-w-2xl w-full mx-auto">
      <div className="my-2 p-4 border border-theme content-theme ">
        <FilterProductsForm />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {productsToDisplay.map((product) => (
          <ProductCard key={`product_${product.id}`} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
