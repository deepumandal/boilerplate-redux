// TODO: use this store variable to create a store.
import thunk from "redux-thunk"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./product/product.reducer";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";

// Note: use cart, product and auth as keys

const rootreducer = combineReducers({
  cart : cartReducer,
  auth : authReducer,
  product : productReducer
})

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk))

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
