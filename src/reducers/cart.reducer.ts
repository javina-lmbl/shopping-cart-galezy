import { Reducer } from 'redux';
import { ActionPlusCart, ActionSetProducts } from '../types/actions.interfaces';
import { Product } from '../types/poduct.interface';

export interface CartProduct {
  product: Product;
  amount: number;
}

export type CartReducerState = CartProduct[];

const INITIAL_STATE: CartReducerState = [];

export const cartReducer: Reducer<CartReducerState, ActionPlusCart> = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type === 'cart/plus') {
    const { product, amount } = action;
    state = state.map((item) =>
      item.product.id !== product.id
        ? item
        : {
            amount: item.amount + amount,
            product,
          }
    );
  }

  return state;
};
