import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <>
      <Link to="/cart"> 
      <button className="material-symbols-outlined">
      shopping_cart
      </button>
      <p className='cantidad'>3</p>
      </Link>
     
    </>
  )
}

export default CartWidget