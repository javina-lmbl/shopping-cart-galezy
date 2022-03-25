import {Action} from 'redux'
import { Product } from './poduct.interface'

export interface ActionSetProducts extends Action<'products/set'> {
    list: Product[];
}

export interface ActionPlusCart extends Action<'cart/plus'> {
    product: Product,
    amount: number
}