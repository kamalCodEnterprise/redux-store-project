import React from 'react'
import Products from '../component/Products.js'

const Home = () => {
 
  return (
    <div>

        <h2 className='heading'> Welcome to redux store</h2>

        <section>
            <h3>Products</h3>
            <Products/>
            
        </section>
    </div>
  )
}

export default Home