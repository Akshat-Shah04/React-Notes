import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
import { toast } from 'react-toastify'

function Usermanage() {

    const [user,setuser] = useState([])

    useEffect(()=>{
        fechdata()
    },[])
    const fechdata=async(e)=>{
        const res = await axios.get("http://localhost:3000/users")
        console.log(res.data)
        setuser(res.data)
    }


    const handlestatus=async(id)=>{
        const res = await axios.get(`http://localhost:3000/users/${id}`)
        const currentstatus = res.data.status

        try {
            if(currentstatus === "block"){
                const res = await axios.patch(`http://localhost:3000/users/${id}`,{status:"unblock"})
                console.log(res.data)
                if(res.status === 200){
                    toast.success("unblock successfully")
                    fechdata()
                }
            }
            else if(currentstatus === "unblock")
                {
                    const res =await axios.patch(`http://localhost:3000/users/${id}`,{status:"block"})
                    
                    {
                        if(res.status === 200)
                            {
                                toast.success("block successfully")
                                fechdata()
                            }
                    }
                }
        } catch (error) {
            console.log("no msg",error)
        }
    }
  return (

   
    
    <div>
      <Aheader heading="View User manage" />
      <div className="container my-5">
                <h1>View Package</h1>
                <table class="table table-dark table-hover mb-5">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#ID</th>
                            <th scope="col">name</th>
                            <th scope="col">Email</th>
                            <th scope="col">status</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user && user.map((user) => {
                                return (
                                    <tr className='text-center'>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button className='btn btn-primary' onClick={()=>handlestatus(user.id)}>{user.status}</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
    </div>
  )
}

export default Usermanage
