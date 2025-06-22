import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
 const{resData}=props;
 const{name,cuisines,costForTwo,avgRating,cloudinaryImageId}=resData?.info
  
  return(
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:border border-black border-solid  ">
      <img className="rounded-sm" src={CDN_URL+cloudinaryImageId}></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}


export default RestaurantCard;