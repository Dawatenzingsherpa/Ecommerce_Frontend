import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import API from '../http'
import { Product, ProductState } from '../globals/componenets/types/productTypes'
import { Status } from './authSlice'
import { AppDispatch } from './store'


const initialState : ProductState = {
  product : [],
  status : Status.LOADING
}

const productSlice = createSlice({
  name : "product",
  initialState,
  reducers : {
    setProduct(state:ProductState,action:PayloadAction<Product[]>){
      state.product = action.payload
    },
    setStatus(state:ProductState,action:PayloadAction<Status>){
      state.status = action.payload
    }
  }

})


export const {setProduct,setStatus} = productSlice.actions;
export default productSlice.reducer

export function fetchPorducts(){
  return async function fetchPorductsThunk(dispatch:AppDispatch) {
    dispatch(setStatus(Status.LOADING))
    try{
      const response = await API.get('admin/product');
      if(response){
        const {data} = response.data
        dispatch(setProduct(data))
        dispatch(setStatus(Status.SUCCESS))
      }else{
        dispatch(setStatus(Status.ERROR))
      }
      
    }catch(error){
      dispatch(setStatus(Status.ERROR))
    }
  }
}