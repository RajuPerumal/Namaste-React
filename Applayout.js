import RestuarantCard from "./RestuarantCard"
import {restaurantlist} from "./Constants"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom"
import {filterData} from "./Utilis"
import useOnline from "./useOnline"
// import Search from "./search"



const AppLayout = () =>{
    const [searchText, setSearchText] = useState('')
    const [allRestaurants, setallRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    useEffect(()=>{
        getRestaurants()
        },[])

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0827989&lng=80.2754246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
               
        const json = await data.json()
        console.log(json)
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setallRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    // if (filteredRestaurants?.length === 0)
    // return <h1>No Restaurant match your search...</h1>
    const isOnline = useOnline()
    if(!isOnline){

        return <h1>You Are Offline, Please Check your Internet connection...</h1>
    }

    return allRestaurants?.length === 0 ? (<Shimmer/>) :(
        <div className="mr-auto">
            
            <div className="items-end ml-4">
                <input type="text" className=" " placeholder='Search' 
                value={searchText} 
                onChange={(e)=>{setSearchText(e.target.value)}}
                />
                <button className="p-2 m-2 bg-purple-600 text-white rounded-md hover:bg-purple-800" 
                
                onClick={()=> {
                    const data = filterData(searchText,allRestaurants)
                    console.log(data)
                    setFilteredRestaurants(data)
                    
                }}
                
                >Search</button>
               
                                
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants?.map((restaurants)=>{
                    
                        return(
                             <Link to={"/restaurant/" + restaurants?.info?.id} key={restaurants?.info?.id}>
                             <RestuarantCard {...restaurants?.info} /> 
                             </Link>
                             )

                    })
                }
            {/* <RestuarantCard restaurantlist = {restaurantlist[0]}/>
            <RestuarantCard restaurantlist = {restaurantlist[1]}/>
            <RestuarantCard restaurantlist = {restaurantlist[2]}/>
            <RestuarantCard restaurantlist = {restaurantlist[3]}/> */}
            
            </div>
        </div>
    )
}
export default AppLayout