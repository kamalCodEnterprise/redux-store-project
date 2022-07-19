import {createSlice} from '@reduxjs/toolkit'


const initialState= {
    value: 0
  }


const check = createSlice({
    name: 'check',
    initialState,
    reducers: {
       
        
        incredata: state => {
            
            state.value += 1
          }
        
    }
})
export const {incredata} = check.actions
export default check.reducer
