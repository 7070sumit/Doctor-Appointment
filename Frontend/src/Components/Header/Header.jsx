import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <header className='shadow sticky z-50 top-0' >
        <nav className='  px-4 border-1/2 border-[#490B3D]'>
          <div className='flex  justify-between text-center items-center gap-1 mx-2'>
            <div className='basis-1/4'>
              <Link to="/" className='flex mr-3 h-12'>
                logo
              </Link>
            </div>
            <div className='md:basis-1/2 basis-1/3 hidden sm:block justify-between gap-2 items-center w-full'>
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
            <div className=' basis-2/3  flex justify-end sm:justify-center mr-auto'>
              <Link to="/user/login" className='hidden sm:block border-2 border-[#F1B814] bg-[#BD1E51]  rounded-md text-white font-semibold hover:bg-[#86176f]  p-1'>Log In / Sign Up </Link>
              <button className='sm:hidden ml-3 mr-6 flex flex-col justify-center' onClick={toggleMenu}>
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className=''>
        {isMenuOpen ? (
          <ul className='sm:hidden bg-white absolute w-full z-50 pt-4   flex flex-col items-center text-[#490B3D]  mr-5  opacity-80 text-base font-medium gap-2'>

            <li className='border-slate-300 border-b-[1px] '>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li className='border-slate-300 border-b-[1px] '>
              <NavLink to="/labtest">
                Lab Tests
              </NavLink>
            </li>
            <li className='border-slate-300 border-b-[1px] '>
              <NavLink to="/buymedicine">
                Buy Medicine
              </NavLink>
            </li>
            <li className='border-slate-300 border-b-[1px] '>
              <NavLink to="/videoconsult">
                Video Consult
              </NavLink>
            </li>
            <li className='border-slate-300 border-b-[1px] '>
              <NavLink to="/user/login" >
              Log In / Sign Up 
              </NavLink>
            </li>
          </ul>)
          : null}

      </div>
    </div>

  )
}

export default Header
