import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLayout from '../HeaderLayout'

function MainLayout() {
  return (
    <>
    <HeaderLayout/>
    <Outlet/>
    </>
  )
}

export default MainLayout