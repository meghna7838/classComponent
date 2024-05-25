import React from "react";
class App extends React.Component{

  constructor(){
    super();
    this.state={
      count:4,
      vehicles:["Bus","Car","Bycycle","Motorcycle"],
      favourite:"Car"
    };
  }

  changeFavourite=()=>{
    this.setState({favourite:"Motorcycle"});
    this.setState((prevState)=>({count:prevState.count+1}));
    console.log(this.state.favourite);
  }

  render(){
    return   <><h2 onClick={this.changeFavourite}> Hello</h2>
    <h2>{this.state.favourite}</h2>
    <h2>{this.state.count}</h2>
    </>
  
}
}
export default App;