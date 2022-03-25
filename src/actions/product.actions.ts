import { ThunkAction } from 'redux-thunk';
import fakeStoreApi from '../services/fakeStore.api';
import { ActionSetProducts } from '../types/actions.interfaces';
import { Product } from '../types/poduct.interface';

export const setProducts = (list: Product[]): ActionSetProducts => ({
  type: 'products/set',
  list,
});

export const getProducts =
  (): ThunkAction<any, any, any, ActionSetProducts> => async (dispatch) => {
    const response = await fakeStoreApi.get('products');
    dispatch(setProducts(response.data));
  };
