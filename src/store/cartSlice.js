import {createSlice} from '@reduxjs/toolkit'



const initialState = []


const cartSlice = createSlice({
    
    name: 'cart',
    initialState,
    
    reducers: {
        add(state, action){
            
            state.push(action.payload)
   
           state.map((item)=> (item.id===action.payload.id ? `  ${item.id++} ` : item   ))
           
           
            
           
        },
        remove(state, action){
         return state.filter(item => item.id !== action.payload)
        },
        
        
    }
})
export const {add , remove} = cartSlice.actions
export default cartSlice.reducer
