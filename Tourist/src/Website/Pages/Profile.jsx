import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import Header from '../Coman/Header';
import Footer from '../Coman/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const redirect = useNavigate()

    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        img: "",
        status: "",
    });

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async (e) => {
        try {
            // 
            const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem("Uloginid")}`);
            console.log(res.data)
            setData(res.data)

        } catch (error) {
            console.log("data not resopse", error)
        }
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data)
    };

    const handleupdate = async (e) => {
        e.preventDefault();
        if (
            data.name.trim() === "" ||
            data.email.trim() === "" ||
            data.password.trim() === "" ||
            data.img.trim() === ""
        ) {
            toast.error("All fields are required!");
            return;
        }

       try {
        const res = await axios.patch(`http://localhost:3000/users/${data.id}`, data)
        console.log(res.data)

        if (res.status == 200) {
            setData({
                name: "",
                email: "",
                password: "",
                img: "",
                status: "",
            })
            toast.success("User updated successfully");
            redirect("/")
        }
       } catch (error) {
        console.log("resolve data")
       }

    }

    return (
        <div>
            <Header />
            <div className=''>
                <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                    <div className='mask gradient-custom-3'></div>
                    <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                        <form action="" onSubmit={handleupdate}> 
                            <MDBCardBody className='px-5'>
                                <h2 className="text-uppercase text-center mb-5">update profile data</h2>
                                <MDBInput wrapperClass='mb-4' label='Your Name' name='name' onChange={handleChange} value={data.name} size='lg' id='form1' type='text' />
                                <MDBInput wrapperClass='mb-4' label='Your image' name='img' onChange={handleChange} value={data.img} size='lg' id='form2' type='url' />
                                <MDBInput wrapperClass='mb-4' label='Your Email' name='email' onChange={handleChange} value={data.email} size='lg' id='form2' type='email' />
                                <MDBInput wrapperClass='mb-4' label='Password' name='password' onChange={handleChange} value={data.password} size='lg' id='form3' type='password' />

                                <div className='d-flex flex-row justify-content-center mb-4'>
                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                                </div>
                                <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' >update profile</MDBBtn>

                            </MDBCardBody>
                        </form>
                    </MDBCard>
                </MDBContainer>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
