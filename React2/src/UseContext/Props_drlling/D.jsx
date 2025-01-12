import React from 'react'

function D({name,setname}) {
  return (
    <div>
      <h1>D Compo</h1>
      <h1>Hello..d compo {name}</h1>
      <button onClick={()=>setname("Rajesh")}>change name</button>
    </div>
  )
}

export default D
