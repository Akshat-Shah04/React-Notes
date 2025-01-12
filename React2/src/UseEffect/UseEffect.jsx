import React, { useEffect, useState } from 'react'
import Header from '../layout/Coman/Header'
import UserTabler from './UserTabler';
import Usercard from './Usercard';

function UseEffect() {

    const [data,setdata] = useState(0);

    // useEffect(()=>{
    //     console.log("data re-reder")
    //     return()=>{
    //         console.log("data withou re-reder")
    //     }
    // },[])

    // useEffect(()=>{
    //     console.log("useeffect data")
    // })

    //  useEffect(()=>{
    //     console.log("data re-reder")
    //     return()=>{
    //         console.log("data withou re-reder")
    //     }
    // },[data])

  return (
    <div >
      <Header />
      {/* useffect :- side effect function / api call */}
      {/* useeffect :- component re-redner / 2 */}
      {/* useEffet :- first para (funtion) ,second ;- optional , [] ,[state] */}
    <h1>{data}</h1>
    <button onClick={()=>setdata(data+1)}>inc</button>

    {/* <UserTabler /> */}
    <Usercard />
    
    </div>
  )
}

export default UseEffect
