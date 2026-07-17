import { Status } from "../../../store/authSlice"
import { Product } from "./productTypes"

export enum PaymentMethod {
  Cod= 'cod',
  Khalti = 'khalti'
}
export enum PaymentStatus{
  Paid = "paid",
  Unpaid = 'unpaid'
}


export interface PaymentDetails {
  id?: string,
  paymentMethod: PaymentMethod,
  paymentStatus? : PaymentStatus,
  pidx? : string
}

export interface ItemDetail{
  productId : string,
  quantity : number
}

export interface OrderResponseItem extends ItemDetail{
  orderId : string
}

export enum OrderStatus{
 
  Pending  = "pending",
  Delivered = 'delivered',
  OntheWay = 'ontheWay',
  Cancelled = 'cancelled',
  Preparing = 'preparing',
  All = 'all'

}

export interface OrderDetails{
  id : string,
  quantity : number,
  orderId : string,
  productId : string,
  Product : Product,
  Order : OrderData
}

export interface OrderData {
  id? :string,
  phoneNumber: string,
  shippingAddress: string,
  totalAmount: number,
  orderStatus? : OrderStatus
  paymentId? : string,
  userId? : string,
  createdAt? : Date | string,
  Payment: PaymentDetails,
  items : ItemDetail[]
  orderDetails? : OrderDetails[]
}

export interface CreateOrderData {
  phoneNumber: string;
  shippingAddress: string;
  totalAmount: number;
  paymentDetails: PaymentDetails;
  items: ItemDetail[];
}

export interface OrderResponseData{
  items : OrderResponseItem[],
  status : Status,
  khaltiUrl : string |null,
  myOrder : OrderData[],
  orderDetails : OrderDetails[]
}