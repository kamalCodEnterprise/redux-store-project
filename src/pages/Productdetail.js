import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';

const Productdetail = () => {

    const productd = useSelector(state => state.detail)
    const dispatch = useDispatch()
    
    const handleAdd = (product) => {
        dispatch(add(product));
    };
  return (
    <div>
    <h3>product detail</h3>
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
                <button onClick={() => handleAdd(product)} className="btn">
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