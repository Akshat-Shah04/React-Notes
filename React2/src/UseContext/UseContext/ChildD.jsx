import React, { useContext } from 'react'
import { data } from './Childa'

function ChildD() {

    const {count,setcount} = useContext(data)
    
  return (
    <div>
      <h1>Child D compo</h1>
      <h2>Hello...{count}</h2>
      <button onClick={()=>setcount(count+1)}>Ince </button>
    </div>
  )
}

export default ChildD
