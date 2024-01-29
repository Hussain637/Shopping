import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar'
import BtnUp from '../components/btnUp'

export default function LayoutHomePage() {
  return (
    <>
       <NavBar/>
       <BtnUp/>
    <Outlet/>
    </>
  )
}
