import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { logo } from './Constants'
import useRestaurantmenu from './Utilis'
import { useDispatch } from 'react-redux'
import { addItem, removeItems } from './cartSlice'

const RestaurantMenu = () => {
    const resId = useParams()
    console.log(resId)
    const restaurantDetail = useRestaurantmenu(resId)
   
    const dispatch = useDispatch()
   
    const handleAddItem = ()=> {
      dispatch(addItem("C"))
    }
   
    const handleClearCart =()=>{
      dispatch(removeItems())
    }
    
    return (
    <>
    <div>
        <h1>Restaurant URL Id:{resId.resId}</h1>
        <img src={logo+restaurantDetail.cloudinaryImageId} width={200} height={200}></img>
        <h1>{restaurantDetail.name}</h1>
        <h1>Locality :{restaurantDetail.locality}</h1>
        <h1>Average rating : {restaurantDetail.avgRating}</h1>
        <h1>Cost For Two :{restaurantDetail.costForTwoMessage}</h1>
        <button 
        className='p-2 m-2 bg-green-100'
        onClick={()=>{handleAddItem()}}
        >Add Item</button>

        <button 
        className='p-2 m-2 bg-green-100'
        onClick={()=>{handleClearCart()}}
        >Clear Cart</button>

    </div>
    {/* <div>
      <h1>Menu List</h1>
      <ul>
        {Object.values(restaurantDetail?.menu?.items).map((item)=>(
            <li key={item.id}>{item.name}</li>
        )
              )}
      </ul>
    </div> */}
    </>
  )
}

export default RestaurantMenu