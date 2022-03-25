import {Action} from 'redux'
import { Product } from './poduct.interface'

export interface ActionSetProducts extends Action<'products/set'> {
    list: Product[];
}

export interface ActionAddCart extends Action<'cart/add'> {
    product: Product,
    amount: number
}