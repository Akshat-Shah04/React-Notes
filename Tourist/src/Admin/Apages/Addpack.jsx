import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Addpack() {

    const redirect = useNavigate()

    const [data, setdata] = useState({
        id: "",
        coutry: "",
        days: "",
        person: "",
        price: "",
        desc: "",
        url: ""
    })

    const getchange = (e) => {
        setdata({
            // store
            ...data,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(data)
    }

    // add pack
    const handlesubmit = async (e) => {

        e.preventDefault()

        // if(data.coutry === null || data.coutry === ""){
            
        // }

        const res = await axios.post("http://localhost:3000/packages", data)
        console.log(res.data)
        setdata({
            id: "",
            coutry: "",
            days: "",
            person: "",
            price: "",
            desc: "",
            url: ""
        })
        redirect("/viewpack")

    }






    return (
        <div>
            <Aheader heading="Add package" />
            {/* <h1>Add packgaes</h1> */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="booking p-5">
                        <div className="row g-5 align-items-center">

                            <div className="col-md-12">
                                <h1 className="text-white mb-4">Add packages</h1>
                                <form onSubmit={handlesubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" value={data.coutry} onChange={getchange} name='coutry' className="form-control bg-transparent" id="name" placeholder="Country Name" />
                                                <label htmlFor="name">courty name</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="tel" value={data.price} name='price' onChange={getchange} className="form-control bg-transparent " id="datetime" placeholder="Enter your Price" />
                                                <label htmlFor="datetime">Price</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="url" value={data.url} name='url' onChange={getchange} className="form-control bg-transparent" id="email" placeholder="Enter iamge" />
                                                <label htmlFor="email">Enter iamge</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select bg-transparent" onChange={getchange} name='days' value={data.days} id="select1">
                                                    <option value={3}>3</option>
                                                    <option value={5}>5</option>
                                                    <option value={7}>7</option>
                                                    <option value={9}>9</option>
                                                </select>
                                                <label htmlFor="select1">Days</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select bg-transparent" onChange={getchange} name='person' value={data.person} id="select2">
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    <option value={6}>6</option>
                                                    <option value={7}>7</option>

                                                </select>
                                                <label htmlFor="select2">person</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent" onChange={getchange} name='desc' value={data.desc} placeholder="Package desc" id="message" style={{ height: 100 }} defaultValue={""} />
                                                <label htmlFor="message">package  description</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-outline-light w-100 py-3" type="submit">Add package</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addpack
