import { Status } from "../../../store/authSlice"

interface User{
  id : string,
  email : string,
  username : string
}
interface Category{
  id : string,
  categoryName : string
}

export interface Product{
  id: string,
  productName: string,
  description: string,
  productPrice: number,
  productTotalStockQty: number,
  imageUrl: string,
  createdAt: string,
  updatedAt: string,
  userId: string,
  categoryId: string,
  User: User,
  Category: Category     
}

export interface ProductState{
  product : Product[],
  status : Status
}