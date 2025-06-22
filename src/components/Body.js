import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
  const[listOfRestaurants,setListOfRestaurants]=useState([]);
  const[searchText,setSearchText]=useState("")
  const[filteredRes,setFilteredRes]=useState([])

  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.015039&lng=76.909385&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    
  }
  const onlineStatus=useOnlineStatus()
  if(onlineStatus===false) return <h1>looks like your network is disconnected!</h1>
  return(listOfRestaurants.length===0)?<Shimmer/>:(
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4 ">
          <input className=" border border-solid border-black" type="text" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}>
          </input>
          <button className=" m-4 px-4 py-2 bg-pink-100" onClick={()=>{
            const FilteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText))
            setFilteredRes(FilteredRestaurants)

          }}>search</button>
        </div> 
        <div className="search m-4 p-4 flex items-center" >
          <button className="px-4 py-2 bg-gray-100" onClick={()=>{
            const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.4);
            setFilteredRes(filteredList)
          }}>Top Rated Restaurants</button>
          </div>
        
      </div>
      <div className="flex flex-wrap">
       {
        filteredRes.map((restaurant)=><Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>)
       }

      </div>
    </div>
  )
}

export default Body;