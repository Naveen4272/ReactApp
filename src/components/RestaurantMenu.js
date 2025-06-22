import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
const RestaurantMenu = () => {
  const{resId}=useParams()
  
  const resInfo=useRestaurantMenu(resId)
  
  if(resInfo===null) return <Shimmer></Shimmer>
  const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
  const{itemCards}=resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  return (
    
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h4>{costForTwoMessage} </h4>
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
