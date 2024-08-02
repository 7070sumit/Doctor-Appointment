import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function User_Signup() {
    return (
        <div>
            <header
                className='w-full h-10  flex items-center justify-center gap-x-10 text-xl font-medium shadow-xl'
            >
                <NavLink
                    to='/user/register'
                    className={({ isActive }) =>
                        `${isActive ? "text-[#F1B814]" : ""} hover:text-[#F1B814] duration-100`
                    }

                // className='hover:text-[#F1B814] duration-100'
                >
                    User
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${isActive ? "text-[#F1B814]" : ""} hover:text-[#F1B814] duration-100`
                    }
                    to='/doctor/register'
                >
                    Doctor
                </NavLink>
            </header>
            <div className='px-10 py-2 mt-5  w-full'>
                <div className=' flex justify-center '>
                <div className='p-2 px-20 w-full lg:w-1/2 flex flex-col gap-y-3 '>
                        <div >
                            <h1 className='text-3xl font-bold text-[#490b3D]'>Register as user.</h1>
                            <p className='mt-3 text-lg text-[#490b3D] '>Create your account to book appointment with a doctor.</p>
                        </div>
                        <ul>
                            <form
                                className=' flex flex-col gap-4 '
                            >
                                <li className='p-2 w-2/3 relative flex  border-b-[1px]  border-gray-300 focus-within:border-[#F1BB14] focus-within:border-b-2 hover:border-[#F1BB14]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                                    <input
                                        className='outline-0 ml-3 w-full'
                                        placeholder='Firstname'
                                        type="text" />
                                </li>
                                <li className='p-2 w-2/3 relative flex  border-b-[1px]  border-gray-300 focus-within:border-[#F1BB14] focus-within:border-b-2 hover:border-[#F1BB14]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                                    <input
                                        className='outline-0 ml-3 w-full'
                                        placeholder='Lastname'
                                        type="text" />
                                </li>
                                <li className='p-2 w-2/3 relative flex  border-b-[1px]  border-gray-300 focus-within:border-[#F1BB14] focus-within:border-b-2 hover:border-[#F1BB14]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                                    <input
                                        className='outline-0 ml-3 w-full'
                                        placeholder='Email'
                                        type="text" />
                                </li>
                                <li className='p-2 w-2/3 relative flex  border-b-[1px]  border-gray-300 focus-within:border-[#F1BB14] focus-within:border-b-2 hover:border-[#F1BB14]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                                    <input
                                        className='outline-0 ml-3 w-full'
                                        placeholder='Phone'
                                        type="text" />
                                </li>
                                <li className='p-2 w-2/3 relative flex  border-b-[1px]  border-gray-300 focus-within:border-[#F1BB14] focus-within:border-b-2 hover:border-[#F1BB14]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z" /></svg>
                                    <input
                                        className='outline-0 ml-3 w-full'
                                        placeholder='Password'
                                        type="password" />
                                </li>
                                <li className='p-2 w-2/3 relative flex  border-b-[1px]  border-gray-300 focus-within:border-[#F1BB14] focus-within:border-b-2 hover:border-[#F1BB14]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z" /></svg>
                                    <input
                                        className='outline-0 ml-3 w-full'
                                        placeholder='Confirm Password'
                                        type="text" />
                                </li>
                            </form>
                        </ul>
                        <div>
                            <ul className='flex flex-col gap-y-3'>
                                <li className='flex items-center justify-start'>
                                    <input
                                        className='w-5 h-5 accent-[#490B3D]'
                                        type="checkbox" />

                                    <p className='text-lg'>&nbsp; I agree with the Terms & Condition</p>
                                </li>
                                <li className='flex items-center justify-around'>
                                    <p className='text-lg underline'>
                                        Already Registered? &nbsp;
                                        <Link
                                            className='font-medium'
                                            to='#'
                                        >
                                            Sign In
                                        </Link>
                                    </p>
                                    <button
                                        type="submit"
                                        className='px-10 py-[2px] text-lg rounded-2xl font-medium text-white bg-[#BD1E51] hover:bg-[#b01c4b]'>
                                        SIGN UP
                                    </button>
                                </li>
                                <li className='flex items-center justify-center'>
                                    <hr className="w-1/4 border-[2px] border-[#F1B814] rounded-full" />
                                    <p className='mx-2 text-[#490B3D] font-medium'>OR SIGNUP WITH</p>
                                    <hr className="w-1/4 border-[2px] border-[#F1B814] rounded-full" />
                                </li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-center gap-x-4'>
                            <div
                                className='w-8 h-8 bg-[#BD1E51] rounded-full'
                            ></div>
                            <div
                                className='w-8 h-8 bg-[#BD1E51] rounded-full'
                            ></div>
                            <div
                                className='w-8 h-8 bg-[#BD1E51] rounded-full'
                            ></div>
                        </div>
                    </div>
                    <div className='py-10 px-4 w-1/2 bg-cover bg-center hidden lg:block rounded-xl lg:flex lg:items-end'
                        style={{
                            backgroundImage: `url(https://img.freepik.com/free-photo/high-angle-view-stethoscope-stitched-heart-medicines-yellow-backdrop_23-2148214053.jpg?t=st=1722585428~exp=1722589028~hmac=c177cbf9a626bfd229d9041663fa7d1174831ad1dc298bb2869d7e973952d589&w=740)`
                        }}
                    >
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-white text-lg font-medium text-center'>Get all your medical needs in one place book appointments with doctors, schedule lab tests, and purchase medicine. Simplify your healthcare journey with our comprehensive medical assistance platform.</p>
                            <button className='px-5 py-1 mt-5 text-lg font-medium rounded-lg border border-white bg-transparent text-white hover:border-[#490B3D] hover:text-[#490B3D] duration-300'>
                                Doctor's Near You
                            </button>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default User_Signup
