import React, { useContext } from 'react'
import { data } from './Childa'

function Childb() {

    const {data1,setdata1} = useContext(data)

    
  return (
    <div>
      <h1>Child B compo</h1>
      <h2>{data1.age}</h2>
      <h2>{data1.name}</h2>
      <button onClick={()=>setdata1({...data1,name:"kuldeep"})}>Chnage name</button>
    </div>
  )
}

export default Childb
