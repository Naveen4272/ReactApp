import React from "react";



class UserClass extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count1:0,
      
    }
    console.log("constructor called ");
    
    
    
  }
  componentDidMount(){
    console.log('COMPONENET did mount');
    
  }
  componentWillUnmount(){
    console.log("componenet unmount");
    
  }
  componentDidUpdate(){
    console.log("component updated");
    
  }
  render(){
    console.log("render");
    
    return(
      <div className="userclass">
        <h1>Name:{this.props.name}</h1>
        <h2>count:{this.state.count1}</h2>
        <button onClick={()=>{
          this.setState({
           count1:this.state.count1+1
          })
        }}>click</button>
      </div>
    )
  }
}

export default UserClass;