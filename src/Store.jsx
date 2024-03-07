import { configureStore } from "@reduxjs/toolkit";
import {CartSlice} from "./Redux/Slices/CartSlice.jsx";


export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});