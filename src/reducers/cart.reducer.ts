import { Reducer } from 'redux';
import { ActionAddCart, ActionSetProducts } from '../types/actions.interfaces';
import { Product } from '../types/poduct.interface';

export interface CartItem {
  product: Product;
  amount: number;
}

export type CartState = CartItem[];

const INITIAL_STATE: CartState = [];

export const cartReducer: Reducer<CartState, ActionAddCart> = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type === 'cart/add') {
    const { product, amount } = action;
    if (amount > 0 && !state.find((item) => item.product.id === product.id)) {
      state = [
        ...state,
        {
          amount,
          product,
        },
      ];
    } else {
      state = state
        .map((item) =>
          item.product.id !== product.id
            ? item
            : {
                amount: item.amount + amount,
                product,
              }
        )
        .filter((item) => item.amount);
    }
  }

  return state;
};
