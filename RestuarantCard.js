import {logo} from "./Constants"

const RestuarantCard =({cloudinaryImageId,name,cuisines,avgRatingString})=>{
    // const {Image,Name,Cusines,Rating} = restaurantlist
    return(
        <div className="w-[200px] p-2 m-2 h-[310px] shadow-lg bg-pink-100">
            <img src={logo+cloudinaryImageId} className="w-[200px] h-[200px]" />
            <h4 className="font-bold text-sm">{name}</h4>
            <p className="flex flex-wrap">{cuisines[0]}</p>
            <p>{avgRatingString} Stars</p>
        </div>
    )
}
export default RestuarantCard;