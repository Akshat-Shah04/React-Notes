import React, { createContext, useState } from 'react'
import ChildD from './ChildD'
import ChildC from './ChildC'
import Childb from './Childb'

export const data = createContext()

function Childa() {

    const [count,setcount] = useState(0)
    const [name,setname] = useState("Sana")

    const [data1,setdata1]= useState({
        name:"rajesh",
        age:23,
        Course:"Front"
    })

  return (
    <div>
        {/* create context */}
        {/* provide compo  */}
        {/* useContext :- compo use */}
      <h1>Child A compo</h1>

      <data.Provider value={{count,setcount,name,setname,data1,setdata1}}>
        <Childb />
        <ChildC />
        <ChildD />
      </data.Provider>
    </div>
  )
}

export default Childa
