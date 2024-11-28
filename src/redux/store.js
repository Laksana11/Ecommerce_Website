import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import productReducer from "./Slices/productSlice";
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
