import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../fetures/productsSlice";

export const store =configureStore({
  reducer:{
    product:productsSlice,
  }
})