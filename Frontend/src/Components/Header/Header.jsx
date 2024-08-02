import React from 'react'
import {Link,NavLink} from 'react-router-dom'


function Header() {
  return (
<<<<<<< HEAD
    <header className='shadow sticky z-50 top-0' >
      <nav className='bg-cyan-400 border-gray-200 px-4'>
        <div className='flex flex-wrap justify-center text-center items-center gap-1 mx-2'>
            <div className='basis-1/4'>
                <Link to="/" className='flex mr-3 h-12'>
                     logo
                </Link>
            </div>
            <div className='basis-1/2 justify-between items-center w-full'>
                <ul className='flex flex-row font-medium  justify-around'>
                  <li >
                    <NavLink to="/" className={({isActive})=> `${isActive ? "text-[#490B3D]":"text-white"} hover:bg-cyan-200 hover:font-bold   `} >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className={({isActive})=> `${isActive ? "text-[#490B3D]":"text-white"}  hover:bg-cyan-200  hover:font-bold `} >
                      Lab Tests
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className={({isActive})=> `${isActive ? "text-[#490B3D]":"text-white"} hover:bg-cyan-200 hover:font-bold `} >
                      Buy Medicine
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className={({isActive})=> `${isActive ? "text-[#490B3D]":"text-white"} hover:bg-cyan-200  hover:font-bold `} >
                      Video Consult
                    </NavLink>
                  </li>
                </ul>
            </div>
            <div className='basis-1/5  '>
            <Link to="/LogIn" className='  hover:bg-cyan-200  hover:font-bold'>Log In </Link>
            /
            <Link to="/SignUp" className='  hover:bg-cyan-200  hover:font-bold'> Sign Up</Link>
            </div>
        </div>
      </nav>
    </header>
=======
    <div>
      <h1>This is header created by sumit.</h1>
    </div>
>>>>>>> 415c043f7d390528fc999c9d73c6a44051ae78a9
  )
}

export default Header
