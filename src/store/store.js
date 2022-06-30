import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import detailReducer from './detailSlice'

const store = configureStore({
    reducer: {
        cart:cartReducer, 
        detail: detailReducer,
    }
})

export default store