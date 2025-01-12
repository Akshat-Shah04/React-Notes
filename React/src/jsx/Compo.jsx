// jsx :- javascript syntax xml
// jsx :- html allow
// jsx :-  varibale define
// html return direct
// js vs jsx :- 0.2s

// import React, { Component } from "react";

 
// export default class Compo extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello this jsx file</h1>
//             </div>
//         )
//     }
// }

import React from 'react'

function Compo() {

    let name1 = "Rajesh";
    let name2 = 5 + 5;
    let tag = <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>Four</li>

    </ul>

  return (
    
    <div>
        <h1 className=''>Hello this is jsx file</h1>
        <h1>{name1}</h1>
        <p>{name2}</p>

        {tag}
    </div>
  )
}

export default Compo