import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarHome from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { AuthProvider } from '../authContext/AuthContext'

function Root() {
  return (
    <>
      <AuthProvider>
        <NavbarHome />
        <Outlet />
        <Footer /> 
      </AuthProvider>

    </>
  )
}

export default Root