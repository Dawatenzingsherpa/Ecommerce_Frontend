import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import { Status } from './authSlice'
import { AppDispatch } from './store'
import  { APIAuthenticated } from '../http'

export interface CartItem{
  productId: string,
  quantity : number
}

interface CartState{
  item : CartItem[],
  status : Status
}

const initialState : CartState = {
  item : [],
  status : Status.LOADING
}

const CartSlice = createSlice({
  name : "cart",
  initialState : initialState,
  reducers : {

    setItems(state:CartState,action:PayloadAction<CartItem[]>){
      state.item = action.payload
    },
    setStatus(state:CartState,action : PayloadAction<Status>){
      state.status = action.payload
    }
    
  }
})

export const {setItems,setStatus} = CartSlice.actions
export default CartSlice.reducer

export function addToCart(data:CartItem){
  
  return async function addToCartThunk(dispatch:AppDispatch) {
    
    dispatch(setStatus(Status.LOADING))
    try{
      const response = await APIAuthenticated.post("customer/cart",data)
      if(response.status===201){
        const {data} = response.data
        
        dispatch(setItems(data))
        dispatch(setStatus(Status.SUCCESS))
        
      }else{
        dispatch(setStatus(Status.ERROR))
      }
    }catch(error){
      dispatch(setStatus(Status.ERROR))
    }
    
  }
}


export function fetchCartItems(){
  return async function fetchCartItemsThunk(dispatch:AppDispatch) {
    dispatch(setStatus(Status.LOADING))
    try {
      const response = await APIAuthenticated.get("customer/cart")
      if(response.status===200){
        const {data} = response.data
        const totalCartItem = response.data.data.length
        dispatch(setItems(data))
        dispatch(setStatus(Status.SUCCESS))
        localStorage.setItem("totalCartItem",totalCartItem)
      }else{
        dispatch(setStatus(Status.ERROR))
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR))
    }
  }
}




