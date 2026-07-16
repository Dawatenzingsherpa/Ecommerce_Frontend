import { Status } from "../../../store/authSlice"

export enum PaymentMethod {
  Cod= 'cod',
  Khalti = 'khalti'
}


export interface PaymentDetails {
  paymentMethod: PaymentMethod
}

export interface ItemDetail{
  productId : string,
  quantity : number
}

export interface OrderResponseItem extends ItemDetail{
  orderId : string
}



export interface OrderData {
  phoneNumber: string,
  shippingAddress: string,
  totalAmount: number,
  paymentDetails: PaymentDetails
  items:ItemDetail[]
}

export interface OrderResponseData{
  items : OrderResponseItem[],
  status : Status,
  khaltiUrl : string |null
}