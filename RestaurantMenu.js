import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { logo } from './Constants'
import useRestaurantmenu from './Utilis'

const RestaurantMenu = () => {
    const resId = useParams()
    console.log(resId)
    const restaurantDetail = useRestaurantmenu(resId)

    return (
    <div>
        <h1>Restaurant URL Id:{resId.resId}</h1>
        <img src={logo+restaurantDetail.cloudinaryImageId} width={200} height={200}></img>
        <h1>{restaurantDetail.name}</h1>
        <h1>Locality :{restaurantDetail.locality}</h1>
        <h1>Average rating : {restaurantDetail.avgRating}</h1>
        <h1>Cost For Two :{restaurantDetail.costForTwoMessage}</h1>

    </div>
  )
}

export default RestaurantMenu