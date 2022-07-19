import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove,incre,decrem} from '../store/cartSlice';
import { add } from '../store/detailSlice';


const Cart = () => {
   
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const removeitem = (productID) => {
        dispatch(remove(productID))
        
    }
   
    const increm = (product) => {
        dispatch(incre(product));      
       
    };
    const decre = (product) => {
        dispatch(decrem(product));      
       
    };
   
  return (
    <div>
    <h3>Cart</h3>
    
    <div className='cartWrapper'>
    {
        products.map((product)=>(
            
            <div className='cartCard' key={product.id}>
                 
            <img className='productImg' src={product.image} alt='' style={{  height: 'auto',width: '5%',objectFit: 'cover'}}/>
                <h5 style={{minWidth: '47px',width: '244px',textAlign: 'center'}}>{product.title}</h5>
                <h5>Price: {product.price}</h5>
                <div>
               
                <span className='qtyblock'>Quantity:  <button onClick={() => decre(product.id)} className="decr">
                        -
                    </button><span className='qty'>{product.quantity}</span><button onClick={() => increm(product.id)} className="incr">
                       +
                    </button></span>
                
                    </div>
                    
                <button className='btn' onClick={() => removeitem(product.id)}>Remove item</button>
            </div>
        )) 

    }

    </div>


    </div>
  )
}

export default Cart