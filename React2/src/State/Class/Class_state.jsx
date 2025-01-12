import React, { Component } from 'react'
import Class_image from './Class_image';

// state class :- constorr,super , state this.state

export class Class_state extends Component {
    constructor(){
        super();
        this.state = {
            name : "Rajesh",
            count : 0,
            isImage : true
        }
    }
    
    render() {
        return (
           <>
             <div>Class_state</div>
             <h1>{this.state.name}</h1>
             <button className='btn btn-success' onClick={()=>this.setState({name:"Akshat"})}>Chnage name</button>

             <h1>{this.state.count}</h1>
             <button className='btn btn-danger' onClick={()=>this.setState({count : this.state.count + 1 })}>+ ice</button>

             <button className='btn btn-success' onClick={()=>this.setState({count:this.state.count - 1})}>- dec</button>

             <button className='btn btn-primary' onClick={()=>this.setState({count:0})}>Zero</button>
             
             {/* <button className='btn btn-primary' onClick={()=>this.setState({count:this.state.count * 0})}>Zero</button> */}
           <br />
           <br />
            {/* ternray */}
            <button className='btn btn-danger' onClick={()=>this.setState({isImage:false})}>Hide</button>
            {/* <button onClick={()=>}>clicke</button> */}
            <button className='btn btn-primary' onClick={()=>this.setState({isImage:true})}>show</button>
            {/* <button className='' onClick={()=>this.setState({...isImage,})}>toogle</button> */}
            {/* {this.state.isImage ? <Class_image /> : false} */}
            {this.state.isImage ? <Class_image /> : null}
            
           </>
        )
    }
}

export default Class_state



