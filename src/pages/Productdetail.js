import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add,incre ,decrem,add2,add3 } from '../store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Productdetail = () => {
     const[qtysp, setqtysp] =useState(1)
    // const[qtytr, setqtytr] =useState(true)

    const productd = useSelector(state => state.detail)
   
    const dispatch = useDispatch()
    
    const handleAdd3 = (product) => {
        dispatch(add3(product));
    };
   
    const handleAdd2 = (product) => {
      
        dispatch(add2(product));
//         setqtytr(qtytr => qtytr=false ? 'desable' : 'enable')
//     if(qtytr===false){
// return setqtysp(qty=> qty+=1)
//     }

setqtysp(qty=> qty+=1)

       
    };
   
    const decre = (product) => {
        dispatch(decrem(product));      
        setqtysp(qty=> qty>1 ? qty-=1:1)
    };
    const increm= (product) => {
        dispatch(incre(product));
    };
  return (
    <div>
    <h3>product detail</h3>
    <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover

/>
    <div className='cartWrapper'>
    {
        productd.map((product)=>(
            <div className='cartCard' key={product.id}>
            <img className='productImgd' src={product.image} alt='' />
            <div className='details'>
                <h5 className='dtitle'>{product.title}</h5>
                <p>Rating ({product.rating.rate})</p>
                <h5>Category: {product.category}</h5>
                <p>{product.description}</p>
                <h5>Price: ${product.price}</h5>
                <div>
               
               <span className='qtyblock'>Quantity:  <button onClick={() => decre(product.id)} className="decr">
                       -
                   </button><span className='qty' >{qtysp}</span><button onClick={() => handleAdd2(product)} className="incr">
                      +
                   </button></span>
               
                   
            </div>
                <button onClick={() => handleAdd3(product)} className="btn">
                        Add to cart
                    </button>
                    </div>
            </div>
        ))
       
    }
   

    </div>


    </div>
  )
}

export default Productdetail