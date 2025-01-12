import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Ulogin() {
    
    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Uloginid")){
            redirect("/")
        }
    })

    const [fromvalaue, setfromvalue] = useState({
        email: "",
        password: ""
    })

    const getchage = (e) => {
        setfromvalue({
            ...fromvalaue,
            [e.target.name]: e.target.value
        })
        console.log(fromvalaue)
    }

    const handlesubmit=async(e)=>{

        e.preventDefault()

        const {email,password} = fromvalaue

        if(!email.trim() || !password.trim()){
            toast.error("pls required email and password")
            return
        }

        try {
            // const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            const res = await axios.get(`http://localhost:3000/users?email=${email}`);
            if(res.data.length === 0){
                console.log("Email does not Exits...!")
                toast.error("Email does not Exits...!")
                return
            }

            const user = res.data[0]
            if(user.password !== password){
                console.log("incorrect password..!")
                toast.error("incorrect password..!")
                return
            }

            localStorage.setItem('Uloginid',user.id)
            localStorage.setItem('Uname',user.name)
            console.log("User login success")
            toast.success("User login successfully")
            redirect("/")

        } catch (error) {
            console.log("Invalid data",error)
        }
    }

    return (
        <div>
            <div className="container">
                <MDBContainer fluid>

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <form action="" >
                            <MDBCol col='12'>

                                <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                    <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                        <MDBInput onChange={getchage}value={fromvalaue.email} name='email' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
                                        <MDBInput  onChange={getchage} value={fromvalaue.password} name='password'  wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

                                        <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                        <MDBBtn onClick={handlesubmit}  outline className='mx-2 px-5' color='white' size='lg'>
                                            Login
                                        </MDBBtn>

                                        <div className='d-flex flex-row mt-3 mb-5'>
                                            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                                <MDBIcon fab icon='facebook-f' size="lg" />
                                            </MDBBtn>

                                            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                                <MDBIcon fab icon='twitter' size="lg" />
                                            </MDBBtn>

                                            <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                                <MDBIcon fab icon='google' size="lg" />
                                            </MDBBtn>
                                        </div>

                                        <div>
                                            <p className="mb-0">Don't have an account? <Link to="/register" class="text-white-50 fw-bold">Sign Up</Link></p>

                                        </div>
                                    </MDBCardBody>
                                </MDBCard>

                            </MDBCol>
                        </form>
                    </MDBRow>

                </MDBContainer>
            </div>
        </div>
    )
}

export default Ulogin
