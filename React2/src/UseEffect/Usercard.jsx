import axios from 'axios'
import React, { useEffect, useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';

function Usercard() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        console.log(res.data)
        setdata(res.data)
    }

    return (
        <div className='container'>
            <div className="row">
                {
                    data && data.map((product) => {
                        return (
                            <div className="col-md-4" key={product.id}>
                                <MDBCard>
                                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                        <MDBCardImage src={product.image} fluid alt='...' />
                                        <a>
                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                        </a>
                                    </MDBRipple>
                                    <MDBCardBody>
                                    <MDBCardTitle>{product.id}</MDBCardTitle>
                                        <MDBCardTitle>{product.title}</MDBCardTitle>
                                        <MDBCardText>
                                          {product.description}
                                        </MDBCardText>
                                        <MDBBtn href='#'>Button</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Usercard
