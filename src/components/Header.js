import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header=()=>{
  const[btnName,setBtnName]=useState("Login")
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li> <Link to="/contact">Contact us</Link></li>
          <li>Cart</li>
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