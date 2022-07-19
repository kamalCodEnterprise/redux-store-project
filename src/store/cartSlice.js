import {createSlice} from '@reduxjs/toolkit'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = []


const cartSlice = createSlice({
    
    name: 'cart',
    initialState,
    
    reducers: {
        
        add(state, action){
            

        //state.push(action.payload)
   

          const index1 = state.findIndex(item => item.id === action.payload.id);

           if (index1 === -1) {
             state.push({
               ...action.payload,
               quantity: 1
             });
             const updateCart = [...state];
             console.log("carffft" + updateCart);
           } else {
            state[index1].quantity += 1;
             const updateCart = [...state];
             console.log("updtaed cart" + updateCart);
             
           }
           
            

           
           const index = state.findIndex(item => item.id === action.payload.id);
           console.log(index)
           if (index===-1) {
             state.push({
               ...action.payload,
               quantity: 1,
               len : 1
               
             });
             
             const updateCart = [...state];
            
             toast.success(action.payload.title + '. (added to the cart)', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            //  alert( action.payload.title +' ' + "added in cart")
             console.log("added product" + updateCart);
             
           } 
           else {
            state[index].quantity =1;
            //alert( state[index].title +' ' + "already added in cart" + state.length)
            toast.warn('Already added to the cart. Please check your cart.', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
             const updateCart = [...state];
             console.log("updated qty" + updateCart  );
             
           
             
           }
        
            
           
        },
        add2(state, action){
            
          //state.push(action.payload)
 
         
         const index = state.findIndex(item => item.id === action.payload.id);
          
         console.log(index)
         if (index===-1) {
           state.push({
             ...action.payload,
             quantity: 2,
             len:1
             
           });
           const updateCart = [...state];
           console.log("added product" + updateCart);
           
         } 
         else {
          state[index].quantity +=1;
           const updateCart = [...state];
           console.log("updated qty" + updateCart  );
           
         
           
         }
      
          
         
      },
        add3(state, action){
            
          //state.push(action.payload)
 
         
         const index = state.findIndex(item => item.id === action.payload.id);
         console.log(index)
         if (index===-1) {
           state.push({
             ...action.payload,
             quantity: 1,
            len:2
           
             
           });
          
           const updateCart = [...state];
           console.log("added product" + updateCart);
       console.log( updateCart.len +=1)
           if(updateCart){
            toast.success(action.payload.title + '. (added to the cart)', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            
          }
           
         } 
         else {
          state[index].len +=1

        
          
          console.log("len " + "" ,state[index].len +=1)
          //state.quantity = state.quantity;
           const updateCart = [...state];
           console.log("updated qty" + updateCart);
          // console.log("updated qty" + updateCart[index].quantity);
          // const dd = 0 
           if(updateCart[index].len>3 ){
            
              toast.warn( 'Already added2 to the cart. Please check your cart. (Quantity:' + (state[index].quantity)+')', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          }else {
            toast.success( 'Already added2 to the cart. Please check your cart. (Quantity:' + (state[index].quantity)+')', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          }
           
         }
      
          
         
      },
        
        incre(state, action){
            
                const index = state
                index.map( (item) =>  item.id === action.payload ? ( item.quantity += 1)  :item )
   
               // state[index.id].quantity -=1
           
        },
        decrem(state, action){
            
          const index = state
          index.map( (item) =>  item.id === action.payload ? item.quantity > 1 ? item.quantity -= 1 : 1 :item )

         // state[index.id].quantity -=1
     
  },
        remove(state, action){
           
         return state.filter(item => item.id !== action.payload)
        },
       
        
        
    }
})
export const {add , remove,incre,decrem, add2,add3 } = cartSlice.actions
export default cartSlice.reducer
