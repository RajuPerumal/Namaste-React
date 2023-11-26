import { useState, useEffect } from "react"
import { fetch_menu_url } from "./Constants"

export function filterData(searchText,restaurants){
    console.log(searchText,restaurants)
    const searchResult = restaurants.filter((restaurants)=>{
        return restaurants?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    }
         )
    console.log(searchResult)
       return searchResult
   }

const useRestaurantmenu =(resId)=>{

    const [restaurantDetail, setRestaurantDetail] = useState({})

    useEffect(()=>{
        getRestaurantInfo()
    },[])

    async function getRestaurantInfo(){
        const data = await fetch(fetch_menu_url + resId.resId)
        const json = await data.json()
        console.log(json?.data?.cards[0]?.card?.card?.info)
        // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards[0]?.card?.info?.name)
        setRestaurantDetail(json?.data?.cards[0]?.card?.card?.info)
    }
    return restaurantDetail
   }
export default useRestaurantmenu