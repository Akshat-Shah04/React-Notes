import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const redirect = useNavigate()

    const[user,setuser] =useState({
        id:"",
        name:"",
        email:"",
        password:"",
        img:"",
        status:""
    })

    const getchage=(e)=>{
        setuser({
            ...user,
            id:new Date().getTime().toString(),
            status:"unblock",
            [e.target.name]:e.target.value
        })
        console.log(user)
    }

    const handlesubmit=async(e)=>{
        e.preventDefault()

        if(!user.email.trim() || !user.name.trim() || !user.img.trim() || !user.password.trim()){
            toast.error("pls Enter your data")
            return
        }

        const res = await axios.post("http://localhost:3000/users",user)
        console.log(res.data)
        toast.success("register successfully")
        redirect("/ulogin")

    }

    const handlelgin=()=>{
        redirect("/ulogin")
    }

    return (
        <div className=''>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                  <form action="">
                  <MDBCardBody className='px-5'>
                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                        <MDBInput wrapperClass='mb-4' label='Your Name' name='name' onChange={getchage} value={user.name} size='lg' id='form1' type='text' />
                        <MDBInput wrapperClass='mb-4' label='Your image' name='img'  onChange={getchage} value={user.img} size='lg' id='form2' type='url' />
                        <MDBInput wrapperClass='mb-4' label='Your Email' name='email'  onChange={getchage} value={user.email} size='lg' id='form2' type='email' />
                        <MDBInput wrapperClass='mb-4' label='Password' name='password'  onChange={getchage} value={user.password} size='lg' id='form3' type='password' />
                       
                        <div className='d-flex flex-row justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                        </div>
                        <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handlesubmit}>Register</MDBBtn>
                        <MDBBtn className='mb-4 w-100 gradient-custom-4' onClick={handlelgin}  size='lg' >login page</MDBBtn>
                    </MDBCardBody>
                  </form>
                </MDBCard>
            </MDBContainer>
        </div>
    )
}

export default Register
