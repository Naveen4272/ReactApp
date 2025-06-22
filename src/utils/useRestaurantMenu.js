import React, { useEffect, useState } from 'react'
import { FETCH_MENUAPI } from './constants'

const useRestaurantMenu = (resId) => {
  const[resInfo,setResInfo]=useState(null)
  useEffect(()=>{
    fetchMenu()
  },[])
  const fetchMenu=async()=>{
    const data=await fetch(FETCH_MENUAPI+resId)
    const json=await data.json();
    setResInfo(json.data);

  }
  return resInfo
 
}

export default useRestaurantMenu
