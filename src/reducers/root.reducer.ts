import { combineReducers } from 'redux';
import { authReducer, AuthState } from './auth.reducer';
import { cartReducer, CartState } from './cart.reducer';
import { productsReducer, productsState } from './products.reducer';

export interface RootState {
  cart: CartState;
  products: productsState;
  auth: AuthState;
}

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  auth: authReducer,
});

export default rootReducer;
