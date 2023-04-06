import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";
import Cookies from "js-cookie";
import { IAuthUser, IProduct, ShippingAddressType } from "../types/index";

// Type for our state
export interface AuthState {
  authState: string | boolean;
  userInfo: IAuthUser | null | string;
  cart: {
    cartItems: IProduct[] | [];
    shippingAddress: ShippingAddressType | null;
    paymentMethod: string | undefined;
  };
}


 
const userCookie = Cookies.get("userInfo");
const authState = Cookies.get("authState");

const cartCookie: string = Cookies.get("cartItems") ?? "";
const shippingCookie: string = Cookies.get("shippingAddress")  ?? "";
const paymentCookie: string = Cookies.get("paymentMethod")  ?? "";
//  const userCookie:string = Cookies.get("userInfo");
// console.log(shippingCookie) 


// Initial state
const initialState: AuthState = {
  authState: authState ? authState  : false,
  userInfo: userCookie ? userCookie : null,
  cart: {
    cartItems: cartCookie ? JSON.parse(cartCookie) : [],
    shippingAddress: shippingCookie ? JSON.parse(shippingCookie) : {},
    paymentMethod: paymentCookie ? paymentCookie : "",
  },
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload;
    },

    userLogin(state, action) {
      return {
        ...state,
        userInfo: action.payload as IAuthUser
      };
    },

    userLogout(state, action) {
      return {
        ...state,
        userInfo: null,
        cart: {
          ...state.cart,
          cartItems: [],
          shippingAddress: null,
          paymentMethod: "",
        },
      };
    }
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setAuthState, userLogin, userLogout } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth;

export default authSlice.reducer;