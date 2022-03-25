import { ActionAddCart } from '../types/actions.interfaces';
import { Product } from '../types/poduct.interface';

export const addCartAction = (
  product: Product,
  amount: number
): ActionAddCart => ({
  type: 'cart/add',
  amount,
  product,
});
