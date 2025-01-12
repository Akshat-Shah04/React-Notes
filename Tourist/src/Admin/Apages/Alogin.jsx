import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Alogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Aloginid")){
            redirect("/dashboard")
        }
    })

    
    const [fromvalaue,setfromvalue] = useState({
        email:"",
        password:""
    })

    const getchage=(e)=>{
        setfromvalue({
            ...fromvalaue,
            [e.target.name]:e.target.value
        })
        console.log(fromvalaue)
    }

    const handlesubmit=async(e)=>{
        e.preventDefault()

        const {email,password} = fromvalaue

        // blank data
        if(!email.trim() || !password.trim()){
            console.log("pls required email and password")
            toast.error("pls required email and password")
            return
        }

        try {

            // email check 
            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            // console.log(res.data)
            if(res.data.length === 0){
                console.log("Email does not Exits...!")
                toast.error("Email does not Exits...!")
                return
            }

            const admin = res.data[0]
            if(admin.password !== password){
                console.log("incorrect password..!")
                toast.error("incorrect password..!")
                return
            }

            localStorage.setItem("Aloginid",admin.id)
            localStorage.setItem("Aname",admin.name)
           
            console.log("admin login success")
            toast.success("admin login success")
        
            redirect("/dashboard")
            
        } catch (error) {
            console.log("Invalid data",error)
        }
    }

    return (
        <div>
            <div className="container">
                <MDBContainer fluid className="p-3 my-5">

                    <MDBRow>

                        <MDBCol col='10' md='6'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                        </MDBCol>

                        <MDBCol col='4' md='6'>

                        <form onSubmit={handlesubmit}>
                            <MDBInput wrapperClass='mb-4' name='email' value={fromvalaue.email} onChange={getchage} label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput wrapperClass='mb-4' name='password' value={fromvalaue.password} onChange={getchage} label='Password' id='formControlLg' type='password' size="lg" />


                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>

                        </form>

                        </MDBCol>

                    </MDBRow>

                </MDBContainer>
            </div>
        </div>
    )
}

export default Alogin
