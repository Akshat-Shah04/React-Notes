import React, { Component } from 'react'
//  3 phase ;- 
// 1) mouting ;- intital value 2) updated (state change) 3) unmouting (null)


export class Life_class extends Component {

    // mouting store
    constructor(){
        super();
        this.state = {
            name : "rajesh"
        }
    }

    // motuing
    componentDidMount(){
        console.log("motuing state")
    }

    // updateing
    componentDidUpdate(){
        console.log("updated function")
    }

    // shouldComponentUpdate(){
    //     console.log("yes and no")
    // }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"akshat"})}>change nam</button>
      </div>
    )
  }
}

export default Life_class