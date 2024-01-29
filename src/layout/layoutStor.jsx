import React from 'react'
import { Outlet } from 'react-router-dom'
import NavStor from '../components/navStor'

export default function LayoutStor() {
  return (
    <div>
      <NavStor/>
      <Outlet/>
    </div>
  )
}
