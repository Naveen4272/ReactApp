import React from "react";
import ReactDOM from "react-dom/client"
 
const Title=()=>{
  return(
    <div className="title">
      <h1>title</h1>
    </div>
  )
}


 const Heading=()=>{
  return(
    <div className="Heading">
      <Title/>
      <Title></Title>
      {Title()}
      <h1>hello</h1>
    </div>
  )
 }
   const root=ReactDOM.createRoot(document.getElementById("root"));
   root.render(<Heading/>)

