import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove} from '../store/cartSlice';

const Cart = () => {
   
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const removeitem = (productID) => {
        dispatch(remove(productID))
        
    }
   
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
                <span>Item: {product.quantity}</span>
                <button className='btn' onClick={() => removeitem(product.id)}>Remove item</button>
            </div>
        )) 

    }

    </div>


    </div>
  )
}

export default Cart
