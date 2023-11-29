import React from 'react'
import { useSelector } from "react-redux"



const Cart = () => {
    const cartitems =  useSelector((store) => store.cart.items )
  return (
    <div>Cart items : {cartitems.length}</div>
  )
}

export default Cart