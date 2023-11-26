import { useState } from "react"
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"
import store from "./store"

export const Title =()=>{
    return (
    <a href="/">
        <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"}
        className="h-12"
        alt="logo"
        >
        </img>
    </a>
    )
}

const Header =()=>{
    const [loggedIn,setLoggedIn] = useState(false)
    const cartitems =  useSelector(store =>store.cart.items )
    return(
        <div className="flex justify-between bg-purple-200">
            <Title/>
            <div className="flex ">
            <ul className="flex items-center text-blue-700">
                <li className="p-4 font-bold "><Link to="/">Home</Link></li>
                <li className="p-4 font-bold"><Link to="/about">About</Link></li>
                <li className="p-4 font-bold"><Link to="/contact">Contact</Link></li>
                <li className="p-4 font-bold "><Link to="/cart">Cart {cartitems.length}</Link></li>
            </ul>
            <>
        {loggedIn? <button onClick={()=>{setLoggedIn(false)}}>Logout</button>: <button onClick={()=>{setLoggedIn(true)}}>Login</button>}
        </>
        </div>
        </div>

    )
}

export default Header