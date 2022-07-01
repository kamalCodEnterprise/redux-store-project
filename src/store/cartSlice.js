import {createSlice} from '@reduxjs/toolkit'



const initialState = []


const cartSlice = createSlice({
    
    name: 'cart',
    initialState,
    
    reducers: {
        add(state, action){
            
           const index = state.findIndex(item => item.id === action.payload.id);

           if (index === -1) {
             state.push({
               ...action.payload,
               quantity: 1
             });
             const updateCart = [...state];
             console.log("carffft" + updateCart);
           } else {
            state[index].quantity += 1;
             const updateCart = [...state];
             console.log("updtaed cart" + updateCart);
             
           }
           
            
           
           
            
           
        },
        remove(state, action){
         return state.filter(item => item.id !== action.payload)
        },
        
        
    }
})
export const {add , remove} = cartSlice.actions
export default cartSlice.reducer
