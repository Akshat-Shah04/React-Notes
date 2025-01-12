import React, { useState } from 'react'
import B from './B'

function A() {

    const [name,setname] = useState("Diya")

  return (
    <div>
      <h1>A Compo</h1>
      <B name={name} setname={setname} />
    </div>
  )
}

export default A
