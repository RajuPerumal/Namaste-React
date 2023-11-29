import { useState } from "react"
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"
import store from "./store"
import logo from "./assets/logo.png"


export const Title =()=>{
    return (
    <a href="/">
        <img
        data-testid="logo"
        src={logo}
        // src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"}
        className="h-16"
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
        <div className="flex justify-between bg-purple-200 mr-auto">
            <Title/>
            <div className="flex ">
            <ul className="flex items-center text-blue-700 mr-6">
                <li className="p-4 font-bold "><Link to="/">Home</Link></li>
                <li className="p-4 font-bold"><Link to="/about">About</Link></li>
                <li className="p-4 font-bold"><Link to="/contact">Contact</Link></li>
                <li className="p-4 font-bold " ><Link to="/cart" data-testid="cart">Cart {cartitems.length === 0 ? null :cartitems.length}</Link></li>
                {loggedIn? <button onClick={()=>{setLoggedIn(false)}}>Logout</button>: <button onClick={()=>{setLoggedIn(true)}}>Login</button>}
            </ul>
            <>
        
        </>
        </div>
        </div>

    )
}

export default Header