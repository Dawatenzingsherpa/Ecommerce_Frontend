import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import  productSlice from "./productSlice";
import CartSlice from './CartSlice'

const store = configureStore({
  reducer:{
    auth : authSlice,
    products : productSlice,
    cart : CartSlice
  }
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>