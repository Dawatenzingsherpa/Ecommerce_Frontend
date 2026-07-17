import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "./authSlice";
import { CreateOrderData, OrderData, OrderDetails, OrderResponseData, OrderResponseItem } from "../globals/componenets/types/checkoutTypes";
import { AppDispatch } from "./store";
import { APIAuthenticated } from "../http";



const initialState: OrderResponseData = {
  items: [],
  status: Status.LOADING,
  khaltiUrl: null,
  myOrder : [],
  orderDetails : []
}

const orderSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setOrderData(state: OrderResponseData, action: PayloadAction<OrderResponseItem>) {
      state.items.push(action.payload)
    },
    setStatus(state: OrderResponseData, action: PayloadAction<Status>) {
      state.status = action.payload
    },
    setKhaltiUrl(state: OrderResponseData, action: PayloadAction<OrderResponseData['khaltiUrl']>) {
      state.khaltiUrl = action.payload
    },
    setMyOrder(state:OrderResponseData,action:PayloadAction<OrderData[]>){
      state.myOrder = action.payload
    },
    setOrderDetails(state:OrderResponseData,action:PayloadAction<OrderDetails[]>){
      state.orderDetails = action.payload
    }
  }
})

export const { setOrderData, setStatus, setKhaltiUrl,setMyOrder,setOrderDetails } = orderSlice.actions
export default orderSlice.reducer


export function createOrder(data: CreateOrderData) {
  return async function createOrderThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING))
    try {
      const response = await APIAuthenticated.post('order', data);
      if (response) {
        dispatch(setOrderData(response.data.data))
        dispatch(setStatus(Status.SUCCESS))
        if (response.data.url) {
          dispatch(setKhaltiUrl(response.data.url))
        } else {
          dispatch(setKhaltiUrl(null))
        }
      }else{
        dispatch(setStatus(Status.ERROR))
      }


    } catch (error) {
      dispatch(setStatus(Status.ERROR))
    }
  }
}


export function fetchMyOrders(){
  return async function fetchMyOrdersThunks(dispatch:AppDispatch) {
    dispatch(setStatus(Status.LOADING))
    try{
      const response = await APIAuthenticated.get("order/customer");
      if(response){
        dispatch(setMyOrder(response.data.data))
        dispatch(setStatus(Status.SUCCESS))
      }else{
        dispatch(setStatus(Status.ERROR))
      }
    }catch(error){
      dispatch(setStatus(Status.ERROR))
    }
  }
}


export function fetchOrderDetails(id : string){
  return async function fetchOrdersDetailsThunks(dispatch:AppDispatch) {
    dispatch(setStatus(Status.LOADING))
    try{
      const response = await APIAuthenticated.get(`order/customer/${id}`);
      if(response){
        dispatch(setOrderDetails(response.data.data))
        dispatch(setStatus(Status.SUCCESS))
      }else{
        dispatch(setStatus(Status.ERROR))
      }
    }catch(error){
      dispatch(setStatus(Status.ERROR))
    }
  }
}

export function cancelOrder(id : string){
  return async function cancelOrderThunks(dispatch:AppDispatch) {
    dispatch(setStatus(Status.LOADING))
    try{
      const response = await APIAuthenticated.get(`order/customer/cancel/${id}`);
      if(response){
        dispatch(setOrderDetails(response.data.data))
        alert("order Cancelled Successfully")
        dispatch(setStatus(Status.SUCCESS))
      }else{
        dispatch(setStatus(Status.ERROR))
      }
    }catch(error){
      dispatch(setStatus(Status.ERROR))
    }
  }
}

