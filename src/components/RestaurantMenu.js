import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
const RestaurantMenu = () => {
  const{resId}=useParams()
  const[resInfo,setResInfo]=useState(null);
  useEffect(()=>{
fetchMenu();
  },[])
  const fetchMenu=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.015039&lng=76.909385&restaurantId="+resId)
  const json=await data.json()
  console.log(json);
  setResInfo(json.data)
  
  }
  if(resInfo===null) return <Shimmer></Shimmer>
  const{name,cuisines,costForTwo}=resInfo?.cards[2]?.card?.card?.info;
  const{itemCards}=resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  return (
    
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h4>{costForTwo}</h4>
       <h1>Menu</h1>
       <ul>
     {
      itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}</li>)
     }
       </ul>
    </div>
  )
}

export default RestaurantMenu
