import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { NavLink, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>About page</h1>
        <NavLink  to="/about/about1">About1</NavLink>
        <NavLink to="/about/about2">About2</NavLink>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default About
