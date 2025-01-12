import React, { useState } from 'react'

function Fun_Multiple() {

    const [data,setdata] = useState({
        name:"",
        surname:"",
        phone:"",
        email:"",
        password:""
    })

    // function

    const getchnage=(e)=>{
        setdata({
            ...data,
            [e.target.name]:e.target.value
        })
        console.log(data)
    }

    return (
        <div className='container'>
            <form>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                        {/* <input type="text" name='name' value={data.name} onChange={(e)=>setdata({...data,name:e.target.value})} className="form-control" id="formGroupExampleInput" placeholder="Enter your name" /> */}
                        <input type="text" name='name' value={data.name} onChange={getchnage} className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Surname :-</label>
                        <input type="text" name='surname' value={data.surname} onChange={getchnage}  className="form-control" id="formGroupExampleInput" placeholder="Enter your surname" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">mobile :- </label>
                        <input type="text" name='phone' value={data.phone} onChange={getchnage} className="form-control" id="formGroupExampleInput" placeholder="Enter your phone no" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Email :-</label>
                        <input type="email" name='email' value={data.email} onChange={getchnage} className="form-control" id="formGroupExampleInput" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">password</label>
                        <input type="password" name='password' value={data.password} onChange={getchnage} className="form-control" id="formGroupExampleInput" placeholder="Enter your password" />
                    </div>
                    <div className="mb-3">
                        <input type="submit" />
                    </div>
       
            </form>
        </div>
    )
}

export default Fun_Multiple