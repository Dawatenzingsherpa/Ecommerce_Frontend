import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "./authSlice";
import { AppDispatch } from "./store";
import { APIAuthenticated } from "../http";
import { Product } from "../globals/componenets/types/productTypes";

export interface CartItem {
  Product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  status: Status;
}

const initialState: CartState = {
  items: [],
  status: Status.LOADING,
};

interface DeleteAction {
  productId: string;
}
export interface Update extends DeleteAction {
  productId: string;
  quantity: number;
}

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setItems(state: CartState, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
    setStatus(state: CartState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setDeleteItem(state: CartState, action: PayloadAction<DeleteAction>) {
      const index = state.items.findIndex(
        (item) => item.Product.id === action.payload.productId,
      );
      state.items.splice(index, 1);
    },
    setUpdateQuantity(state: CartState, action: PayloadAction<Update>) {
      const index = state.items.findIndex(
        (item) => (item.Product.id = action.payload.productId),
      );
      if (index !== -1) {
        state.items[index].quantity = action.payload.quantity;
      }
    },
    resetCart(state: CartState) {
      state.items = [];
    },
  },
});

export const {
  setItems,
  setStatus,
  setDeleteItem,
  setUpdateQuantity,
  resetCart,
} = CartSlice.actions;
export default CartSlice.reducer;

export function addToCart(id: string) {
  return async function addToCartThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIAuthenticated.post("customer/cart", {
        productId: id,
        quantity: 1,
      });
      if (response.status === 201) {
        const { data } = response.data;

        dispatch(setItems(data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchCartItems() {
  return async function fetchCartItemsThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIAuthenticated.get("customer/cart");
      if (response.status === 200) {
        const { data } = response.data;
        dispatch(setItems(data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function deleteCartItems(productId: string) {
  return async function deleteCartItemsThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIAuthenticated.delete(
        "customer/cart/" + productId,
      );
      if (response.status === 200) {
        dispatch(setDeleteItem({ productId }));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function updateCartItemQuantity(productId: string, quantity: number) {
  return async function updateCartItemQuantityThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await APIAuthenticated.patch(
        "customer/cart/" + productId,
        {
          quantity: quantity,
        },
      );
      if (response.status === 200) {
        dispatch(setUpdateQuantity({ productId, quantity }));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}
