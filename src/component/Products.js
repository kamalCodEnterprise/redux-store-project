import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { add } from '../store/cartSlice';
import { detailp } from '../store/detailSlice';



const Products = () => {
    
    const dispatch = useDispatch();
 
     const [products, setProducts] = useState([]);

  

     useEffect(() => {
      
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
           setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));      
       
    };
    const handledetail = (product) => {
        dispatch(detailp(product));
    };

    

    return (
        <div className="productsWrapper"> 
            {products.map((product) => (
                <div className="card" key={product.id}>
                <Link to="/productdetail" onClick={() => handledetail(product)}>
                    <img className='productImg' src={product.image} alt="" />
                     <h4 >{product.title}</h4></Link>
                    <h5>{product.price}</h5>
                 
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;