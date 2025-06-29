import React, { lazy } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery=lazy(()=>import("./components/Grocery"))

const AppLayout=()=>{
  return(
    <div id="app">
      <Header/>
      <Outlet/>

    </div>
  )
}




const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu/>
  },
  {
    path:"/grocery",
    element:<Grocery/>
  }
    ],
    errorElement:<Error/>
    

  },
  
])




const  root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)