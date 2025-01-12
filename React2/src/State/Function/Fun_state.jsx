// React Function v 16.8 :- hooks :- inbuilt in object
// hooks :- hooks functionalty: - useState /varibale / chage name
// Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.
// useState declares a state variable that you can update directly.
// rule :- import 


import React, { useState } from 'react'
import Fun_image from './Fun_image';



function Fun_state() {

    // let name = "asd"

    // const [define,update] = useState()
    const [name,setname] = useState("Rajesh");
    const [number,setnumber] = useState(0);

    const [data,setdata] = useState({
        name:"rajesh",
        count:0,
        isImage:true
    })


    return (
    <div>
        <h1>{name}</h1>
        <button className='btn btn-primary' onClick={()=>setname("kuldeep")}>Chnage name</button>
        <h1>{number}</h1>
        <button className='btn btn-danger' onClick={()=>setnumber(number + 1)}>ince</button>
        
        <h1>{data.name}</h1>
        <button className='btn btn-success' onClick={()=>setdata({name:"akshat"})}>chnage name</button>

        <h1>{data.count}</h1>

        <button className='btn btn-primary' onClick={()=>setdata({...data,count: data.count + 1})}>+ inc</button>
        <button className='btn btn-primary' onClick={()=>setdata({...data,count: data.count - 1})}>- dec</button>
        <button className='btn btn-primary' onClick={()=>setdata({...data,count: 0 })}>Zero</button>

        <br /><br />
        <button className='btn btn-info' onClick={()=>setdata({...data,isImage:false})}>Hide</button>
        <button className='btn btn-info' onClick={()=>setdata({...data,isImage:true})}>show</button>
        <button className='btn btn-info' onClick={()=>setdata({...data,isImage:!data.isImage})}>Toggle</button>
        
        {data.isImage ? <Fun_image /> : null}


    </div>
  )
}

export default Fun_state