import { combineReducers } from "redux";
import { cartReducer } from "./cart.reducer";
import { productsReducer } from "./products.reducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
})

export default rootReducer;