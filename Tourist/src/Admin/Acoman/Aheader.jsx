import React, { useEffect } from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Aheader({heading}) {

    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Aloginid")){
            redirect("/alogin")
        }
    })
  

    const logout=()=>{
        localStorage.removeItem("Aloginid")
        localStorage.removeItem("Aname")
        redirect("/alogin")
        toast.success("Admin logout success..!")
    }

  return (
    <div>
        <div>
                {/* Spinner Start */}
                {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> */}
                {/* Spinner End */}
                {/* Topbar Start */}
                <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                    <div className="row gx-0">
                        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                                <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</small>
                                <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+012 345 6789</small>
                                <small className="text-light"><i className="fa fa-envelope-open me-2" />info@example.com</small>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
                {/* Navbar & Hero Start */}
                <div className="container-fluid position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                        <a href className="navbar-brand p-0">
                            <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3" />Tourist</h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/dashboard" className="nav-item nav-link">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Packages</a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/viewpack" className="dropdown-item">View Packages</NavLink>
                                        <NavLink to="/addpack" className="dropdown-item">Add package</NavLink>
                                       
                                    </div>
                                </div>
                                <NavLink to="/usermange" className="nav-item nav-link">user</NavLink>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <a href="destination.html" className="dropdown-item">Destination</a>
                                        <NavLink to="/booking" className="dropdown-item">Booking</NavLink>
                                        <a href="team.html" className="dropdown-item">Travel Guides</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    </div>
                                </div>
                                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                            </div>
                            {(
                                ()=>{
                                    if(localStorage.getItem("Aloginid"))
                                    {
                                        return(
                                            <NavLink className="nav-item nav-link">Hello..{localStorage.getItem("Aname")}</NavLink>
                                            
                                        )
                                    }
                                }
                            )()}

                            {(
                                ()=>{
                                    if(localStorage.getItem("Aloginid")){
                                        return(
                                            <>
                                                <NavLink className="nav-item nav-link" onClick={logout}>logout</NavLink>
                                            </>
                                        )
                                    }
                                    else{
                                        return(
                                            <>
                                            <NavLink to="/alogin" className="nav-item nav-link" >Alogin</NavLink>
                                            </>
                                        )
                                    }
                                }
                            )()}
                        
                            
                        </div>
                    </nav>
                    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                        <div className="container py-5">
                            <div className="row justify-content-center py-5">
                                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                    <h1 className="display-3 text-white mb-3 animated slideInDown">{heading}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navbar & Hero End */}
            </div>
    </div>
  )
}

export default Aheader
