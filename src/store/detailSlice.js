import {createSlice} from '@reduxjs/toolkit'


const initialState = []


const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
       
        
        detailp(state, action){
            state.push(action.payload)
        
            if(state.length>1){
                state.splice(action.payload)
                state.push(action.payload)
             
          
          }

        }
        
    }
})
export const {detailp,add,incre,decrem} = detailSlice.actions
export default detailSlice.reducer
