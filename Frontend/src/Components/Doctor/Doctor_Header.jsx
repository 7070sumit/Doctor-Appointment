import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Doctor_Header() {
    const location = useLocation();

    return (

        <div className='p-1 ml-2 w-[60px] h-screen shadow-2xl hidden lg:block'>
            <div className='flex flex-col items-center justify-center h-[90%]'>
                <ul className='flex flex-col gap-y-4'>
                    <li className={`${location.pathname === '/doctor' ? 'bg-[#BD1E51] rounded-lg' : 'bg-white  rounded-lg '} p-1`}>
                        <Link
                            className=''
                            to="/doctor">
                            <svg
                                className={`${location.pathname === '/doctor' ? 'fill-white' : 'fill-[#490B3D]'}`}
                                xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" ><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                            </svg>
                        </Link>
                    </li>
                    <li className={`${location.pathname === '/doctor/appointments' ? 'bg-[#BD1E51] rounded-lg shadow-2xl' : 'bg-white'} p-1`}>
                        <Link
                            className=''
                            to="/doctor/appointments">
                            <svg
                                className={`${location.pathname === '/doctor/appointments' ? 'fill-white' : 'fill-[#490B3D]'}`}
                                xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"><path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" /></svg>
                        </Link>
                    </li>
                    <li className={`${location.pathname === '/doctor/availability' ? 'bg-[#BD1E51] rounded-lg shadow-2xl' : 'bg-white'} p-1`}>
                        <Link
                            className=''
                            to="/doctor/availability">
                            <svg
                                className={`${location.pathname === '/doctor/availability' ? 'fill-white' : 'fill-[#490B3D]'}`}
                                xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" /></svg>
                        </Link>
                    </li>
                    <li className={`${location.pathname === '/doctor/mark-leave' ? 'bg-[#BD1E51] rounded-lg shadow-2xl' : 'bg-white'} p-1`}>
                        <Link
                            className=''
                            to="/doctor/mark-leave">
                            <svg
                                className={`${location.pathname === '/doctor/mark-leave' ? 'fill-white' : 'fill-[#490B3D]'}`}
                                xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#490B3D"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                        </Link>
                    </li>
                    <li className={`${location.pathname === '/doctor/setting' ? 'bg-[#BD1E51] rounded-lg shadow-2xl' : 'bg-white'} p-1`}>
                        <Link
                            className=''
                            to="/doctor/setting">
                            <svg
                                className={`${location.pathname === '/doctor/setting' ? 'fill-white' : 'fill-[#490B3D]'}`}
                                xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#490B3D"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
                        </Link>
                    </li>
                    <li className={`${location.pathname === '/doctor/update-profile' ? 'bg-[#BD1E51] rounded-lg shadow-2xl' : 'bg-white'} p-1`}>
                        <Link
                            className=''
                            to="/doctor/update-profile">
                            <svg
                                className={`${location.pathname === '/doctor/update-profile' ? 'fill-white' : 'fill-[#490B3D]'}`}
                                xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#490B3D"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                        </Link>
                    </li>

                </ul>
            </div>

            <div className='flex items-center justify-center'>
                <ul>
                    <li className='rounded-lg w-10 h-10 border border-[#BD1E51] overflow-hidden'>
                        <img src="https://cdn4.sharechat.com/compressed_gm_40_img_47114_a0a7ce5_1694520044647_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=647_sc.jpg" />
                    </li>
                </ul>
            </div>
        </div>



    )
}

export default Doctor_Header
