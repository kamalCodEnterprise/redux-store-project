import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = () => {
   const item = useSelector((state) => state.cart )
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <Link className="navLink" to="/check">
                    check page
                </Link>
               
               
                <Link className="navLink" to="/cart">
                <span className="cartCount">Cart items: ({  item.reduce((itm,length)=> length.len===1 ? itm-=1: length.len>1 ? itm++ : itm,item.length)})</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;