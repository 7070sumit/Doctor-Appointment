import React from 'react'
import {Link,NavLink} from 'react-router-dom'


function Header() {
  return (
    <header className='shadow sticky z-50 top-0' >
      <nav className='  px-4 border-1/2 border-[#490B3D]'>
        <div className='flex flex-wrap justify-center text-center items-center gap-1 mx-2'>
            <div className='basis-1/4'>
                <Link to="/" className='flex mr-3 h-12'>
                     logo
                </Link>
            </div>
            <div className='basis-1/2 justify-between items-center w-full'>
                <ul className='sm:flex sm:gap-2 flex-row font-medium  justify-around  hidden'>
                  <li className='hover:underline hover:decoration-[#BD1E51]' >
                    <NavLink to="/" className={({ isActive }) =>
                        `${isActive ? "text-[#F1B814]" : ""} hover:text-[#F1B814] duration-100`
                    } >
                      Home
                    </NavLink>
                  </li>
                  <li className='hover:underline hover:decoration-[#BD1E51]'>
                    <NavLink to="/labtest" className={({ isActive }) =>
                        `${isActive ? "text-[#F1B814]" : ""} hover:text-[#F1B814] duration-100`
                    } >
                      Lab Tests
                    </NavLink>
                  </li>
                  <li className='hover:underline hover:decoration-[#BD1E51]'>
                    <NavLink to="/buymedicine" className={({ isActive }) =>
                        `${isActive ? "text-[#F1B814]" : ""} hover:text-[#F1B814] duration-100`
                    }>
                      Buy Medicine
                    </NavLink>
                  </li>
                  <li className='hover:underline hover:decoration-[#BD1E51]'>
                    <NavLink to="/videoconsult" className={({ isActive }) =>
                        `${isActive ? "text-[#F1B814]" : ""} hover:text-[#F1B814] duration-100`
                    } >
                      Video Consult
                    </NavLink>
                  </li>
                </ul>
            </div>
            <div className='basis-1/5  '>
            <Link to="/user/login" className=' border-2 border-[#F1B814] bg-[#BD1E51]  rounded-md text-white font-semibold hover:bg-[#86176f]  p-1'>Log In / Sign Up </Link>
            
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
