import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarHome from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

function Root() {
  return (
    <>
      <NavbarHome />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root