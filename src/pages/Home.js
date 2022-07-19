import React from 'react'
import Products from '../component/Products.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {

  return (
    <div>

        <h2 className='heading'> Welcome to redux store</h2>

        <section>
            <h3>Products</h3>
            <Products/>
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

        </section>
    </div>
  )
}

export default Home