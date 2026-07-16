import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "./authSlice";
import { OrderData, OrderResponseData, OrderResponseItem } from "../globals/componenets/types/checkoutTypes";
import { AppDispatch } from "./store";
import { APIAuthenticated } from "../http";



const initialState: OrderResponseData = {
  items: [],
  status: Status.LOADING,
  khaltiUrl: null
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
    }
  }
})

export const { setOrderData, setStatus, setKhaltiUrl } = orderSlice.actions
export default orderSlice.reducer


export function createOrder(data: OrderData) {
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