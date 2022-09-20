import { Component } from "react";

class App extends Component{

  constructor(){
    super()

    this.state = {
      name : "Hamza"
    }
  }

  render(){
    return(
      <>
      <h1>Hi {this.state.name}</h1>
      <button onClick={()=>{
        this.setState( ()=>{
          return{
            name : "Abuzar"
          }
        },()=>{
          console.log(this.state)
        } )
      }} >Change Name</button>
      </>
    )
  }
}

export default App;