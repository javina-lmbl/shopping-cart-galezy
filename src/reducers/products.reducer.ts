import { Reducer } from 'redux';
import { ActionSetProducts } from '../types/actions.interfaces';
import { Product } from '../types/poduct.interface';

export type productsState = Product[];

const INITIAL_STATE: productsState = [];

export const productsReducer: Reducer<productsState, ActionSetProducts> = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type === 'products/set') {
    state = [...action.list, ...state].filter(
      (v, i, ar) => ar.findIndex((v2) => v2.id === v.id) === i
    );
  }
  return state;
};
