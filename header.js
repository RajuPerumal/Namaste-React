import { useState } from "react"
import {Link} from "react-router-dom"

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
    return(
        <div className="flex justify-between bg-purple-200">
            <Title/>
            <div className="flex ">
            <ul className="flex items-center text-blue-700">
                <li className="p-4 font-bold "><Link to="/">Home</Link></li>
                <li className="p-4 font-bold"><Link to="/about">About</Link></li>
                <li className="p-4 font-bold"><Link to="/contact">Contact</Link></li>
                <li className="p-4 font-bold ">Cart</li>
            </ul>
            <>
        {loggedIn? <button onClick={()=>{setLoggedIn(false)}}>Logout</button>: <button onClick={()=>{setLoggedIn(true)}}>Login</button>}
        </>
        </div>
        </div>

    )
}

export default Header