import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarHome from '../components/navbar/Navbar'

function Root() {
  return (
    <>
      <NavbarHome />
      <Outlet />
    </>
  )
}

export default Root