import React from 'react'
import { NavBar } from './NavBar/NavBar'
import { Outlet } from 'react-router-dom'



export const Layout = () => {
  return (
<>
<NavBar />
<Outlet />

</>
  )
}
