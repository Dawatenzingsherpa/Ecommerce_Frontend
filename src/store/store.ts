import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import  productSlice from "./productSlice";
import CartSlice from './CartSlice'
import orderSlice from "./checkoutSlice"

const store = configureStore({
  reducer:{
    auth : authSlice,
    products : productSlice,
    cart : CartSlice,
    orders : orderSlice
  }
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>