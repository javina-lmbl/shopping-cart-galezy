import { combineReducers } from 'redux';
import { cartReducer, CartState } from './cart.reducer';
import { productsReducer, productsState } from './products.reducer';

export interface RootState {
  cart: CartState;
  products: productsState;
}

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;
