import {logo} from "./Constants"

const RestuarantCard =({cloudinaryImageId,name,cuisines,avgRatingString})=>{
    // const {Image,Name,Cusines,Rating} = restaurantlist
    return(
        <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-100">
            <img src={logo+cloudinaryImageId} className="Cardpic" />
            <h4 className="font-bold text-xl">{name}</h4>
            <p>{cuisines}</p>
            <p>{avgRatingString} Stars</p>
        </div>
    )
}
export default RestuarantCard;