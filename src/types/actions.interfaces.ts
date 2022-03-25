import { Action } from 'redux';
import { Product } from './poduct.interface';

export interface ActionSetProducts extends Action<'products/set'> {
  list: Product[];
}

export interface ActionAddCart extends Action<'cart/add'> {
  product: Product;
  amount: number;
}

export interface ActionLogin extends Action<'auth/login'> {
  user: {
    username: string;
    [key: string]: any;
  };
  token: string;
}

export interface ActionLogout extends Action<'auth/logout'> {}
