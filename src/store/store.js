import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import detailReducer from './detailSlice'
import checkReducer from "./check";

const store = configureStore({
    reducer: {
        cart:cartReducer, 
        detail: detailReducer,
        check: checkReducer
    }
})

export default store