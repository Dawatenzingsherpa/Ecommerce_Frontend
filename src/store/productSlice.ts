import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import API from '../http'
import { Product, ProductState } from '../globals/componenets/types/productTypes'
import { Status } from './authSlice'
import { AppDispatch } from './store'
import { RootState } from './store'


const initialState: ProductState = {
  product: [],
  status: Status.LOADING,
  singleProduct: {} as Product
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state: ProductState, action: PayloadAction<Product[]>) {
      state.product = action.payload
    },
    setStatus(state: ProductState, action: PayloadAction<Status>) {
      state.status = action.payload
    },
    setSingleProduct(state: ProductState, action: PayloadAction<Product>) {
      state.singleProduct = action.payload
    }
  }

})


export const { setProduct, setStatus, setSingleProduct } = productSlice.actions;
export default productSlice.reducer

export function fetchPorducts() {
  return async function fetchPorductsThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING))
    try {
      const response = await API.get('admin/product');
      if (response) {
        const { data } = response.data
        dispatch(setProduct(data))
        dispatch(setStatus(Status.SUCCESS))
      } else {
        dispatch(setStatus(Status.ERROR))
      }

    } catch (error) {
      dispatch(setStatus(Status.ERROR))
    }
  }
}

export function fetchProductById(productId: string) {
  return async function fetchSingleProductThunk(dispatch: AppDispatch, getState: () => RootState) {
    dispatch(setStatus(Status.LOADING))

    const state = getState()
    const existingProduct = state.products.product.find((product: Product) => product.id === productId)
    if (existingProduct) {
      dispatch(setSingleProduct(existingProduct))
      dispatch(setStatus(Status.SUCCESS))
    } else {
      try {
        const response = await API.get(`admin/product/${productId}`);
        if (response) {
          const [data] = response.data.data
          dispatch(setSingleProduct(data))
          dispatch(setStatus(Status.SUCCESS))
        } else {
          dispatch(setStatus(Status.ERROR))
        }

      } catch (error) {
        dispatch(setStatus(Status.ERROR))
      }
    }



  }
}