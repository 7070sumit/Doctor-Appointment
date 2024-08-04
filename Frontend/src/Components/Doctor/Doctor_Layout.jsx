import React from 'react'
import { Outlet } from 'react-router-dom'
import Doctor_Header from './Doctor_Header'

function Doctor_Layout() {
  return (
    <div className='flex'>
    <Doctor_Header/>
    <Outlet  />
    </div>
  )
}

export default Doctor_Layout
