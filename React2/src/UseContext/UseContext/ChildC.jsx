import React, { useContext } from 'react'
import { data } from './Childa'

function ChildC() {

    const {name,setname} = useContext(data)

  return (
    <div>
      <h1>Child C compo</h1>
      <h2>hello{name}</h2>
    </div>
  )
}

export default ChildC
