import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
  const[btnName,setBtnName]=useState("Login")
  const onlineStatus=useOnlineStatus()
  return(
    <div className="flex justify-between bg-pink-100  sm:bg-yellow-50 mb-2">
      <div className="logo-container">
        <img className="w-23" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">onlineStatus:{onlineStatus?"✅":"❌"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About us</Link></li>
          <li className="px-4"> <Link to="/contact">Contact us</Link></li>
          <li className="px-4"><Link to="/grocery">grocery</Link></li>
          <li className="px-4">Cart</li>
          <button className="login-btn" onClick={()=>{
            (btnName==="Login")?setBtnName("Logout"):
            setBtnName("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;