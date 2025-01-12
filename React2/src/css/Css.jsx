import React from 'react';
import "./style.css";
// import "./style1.css";

function Css() {
    
    let intercss = {
        // propery :"value"
        background : "blue",
        color:"red",
        margin:"20px"
    }

  return (
    <div>
        {/* 1) inline */}
        <h1 style={{background:"red",color:"blue"}}>Hello this is inline css</h1>
        {/* 2) internal css */}

        <h2 style={intercss}>Hello this is internal css</h2>

        {/* external css */}
        <div className='main'>Hello </div>

    </div>
  )
}

export default Css