import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "./authSlice";
import {
  CreateOrderData,
  OrderData,
  OrderDetails,
  OrderResponseData,
  OrderResponseItem,
  OrderStatus,
} from "../globals/componenets/types/checkoutTypes";
import { AppDispatch } from "./store";
import { APIAuthenticated } from "../http";
import { resetCart } from "./CartSlice";

const initialState: OrderResponseData = {
  items: [],
  status: Status.LOADING,
  khaltiUrl: null,
  myOrder: [],
  orderDetails: [],
};

const orderSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setOrderData(
      state: OrderResponseData,
      action: PayloadAction<OrderResponseItem>,
    ) {
      state.items.push(action.payload);
    },
    setStatus(state: OrderResponseData, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setKhaltiUrl(
      state: OrderResponseData,
      action: PayloadAction<OrderResponseData["khaltiUrl"]>,
    ) {
      state.khaltiUrl = action.payload;
    },
    setMyOrder(state: OrderResponseData, action: PayloadAction<OrderData[]>) {
      state.myOrder = action.payload;
    },
    setOrderDetails(
      state: OrderResponseData,
      action: PayloadAction<OrderDetails[]>,
    ) {
      state.orderDetails = action.payload;
    },
    setUpdateOrderStatus(
      state: OrderResponseData,
      action: PayloadAction<{ status: OrderStatus; orderId: string }>,
    ) {
      const status = action.payload.status;
      const orderId = action.payload.orderId;
      const updateOrders = state.myOrder.map((order: any) =>
        order.id === orderId ? { ...order, orderStatus: status } : order,
      );
      state.myOrder = updateOrders;
    },
  },
});

export const {
  setOrderData,
  setStatus,
  setKhaltiUrl,
  setMyOrder,
  setOrderDetails,
  setUpdateOrderStatus,
} = orderSlice.actions;
export default orderSlice.reducer;

export function createOrder(data: CreateOrderData) {
  return async function createOrderThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIAuthenticated.post("order", data);
      if (response) {
        dispatch(setOrderData(response.data.data));
        dispatch(resetCart());
        dispatch(setStatus(Status.SUCCESS));
        if (response.data.url) {
          dispatch(setKhaltiUrl(response.data.url));
        } else {
          dispatch(setKhaltiUrl(null));
        }
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchMyOrders() {
  return async function fetchMyOrdersThunks(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIAuthenticated.get("order/customer");
      if (response) {
        dispatch(setMyOrder(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchOrderDetails(id: string) {
  return async function fetchOrdersDetailsThunks(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIAuthenticated.get(`order/customer/${id}`);
      if (response) {
        dispatch(setOrderDetails(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function cancelOrder(id: string) {
  return async function cancelOrderThunks(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIAuthenticated.get(
        `order/customer/cancel/${id}`,
      );
      if (response) {
        dispatch(setOrderDetails(response.data.data));
        alert("order Cancelled Successfully");
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function updateOrderStatus(data: any) {
  return async function updateOrderStatusThunk(dispatch: AppDispatch) {
    dispatch(setUpdateOrderStatus(data));
  };
}
