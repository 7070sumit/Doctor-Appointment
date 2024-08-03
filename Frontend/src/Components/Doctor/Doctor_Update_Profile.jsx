import React from 'react'
import Doctor_Header from './Doctor_Header'

function Doctor_Update_Profile() {
  return (
    <div className='flex flex-col'>
      <div>
        <Doctor_Header />
      </div>
      <div className='px-20 py-10 w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2  '>
          <div className='flex items-center justify-start text-lg font-medium text-[#490B3D] p-2 w-full '>
            <label className=''>Firstname:</label>
            <input
              className='ml-2 border w-full mr-10 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value=""
              disabled
              type="text" />
          </div>
          <div className='flex items-center justify-start text-lg font-medium text-[#490B3D] p-2'>
            <label className=''>Lastname:</label>
            <input
              className='ml-2 border w-full mr-10 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value=""
              disabled
              type="text" />
          </div>
          <div className='flex items-center justify-start p-2 text-lg font-medium text-[#490B3D] '>
            <label className=''>Email:</label>
            <input
              className='ml-2 border w-full mr-10 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51] '
              value=""
              placeholder='xyz@gmail.com'
              type="email" />
          </div>
          <div className='flex items-center justify-start p-2 text-lg font-medium text-[#490B3D]'>
            <label className=''>Phone:</label>
            <input
              className='ml-2 border w-full mr-10 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value=""
              placeholder='+91-1234567890'
              type="tel" />
          </div>
          <div className='flex items-center justify-start p-2 text-lg font-medium text-[#490B3D]'>
            <label className=''>Specialization:</label>
            <input
              className='ml-2 border w-full mr-10 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value=""
              placeholder='Heart Surgeon'
              type="text" />
          </div>
          <div className='flex items-center justify-start p-2 text-lg font-medium text-[#490B3D]'>
            <label className=''>Experience:</label>
            <input
              className='ml-2 border w-full mr-10 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value=""
              type="text" />
          </div>
          <div className='flex items-center justify-start p-2 text-lg font-medium text-[#490B3D]'>
            <label className=''>Degree:</label>
            <input
              className='ml-2 border w-full mr-10 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value=""
              placeholder='MBBS'
              type="text" />
          </div>
          <div className='flex items-center justify-start p-2 text-lg font-medium text-[#490B3D]'>
            <label className=''>Appointment Fee</label>
            <input
              className='ml-2 border w-full mr-10 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value=""
              placeholder='***/-'
              type="number" />
          </div>
          
          <div>
            
          </div>
          <hr />
        </div>
        <hr className='border-2 border-[#F1B814] w-full ' />
        <div>
          <div>
            <h1>Clinic Address</h1>
          </div>
          <div className='flex items-center justify-center text-lg font-medium text-[#490B3D]'>
            <label className=''>Street</label>
            <input
              className='ml-2 border w-1/2 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value=""
              type="text" />
          </div>
          <div className='flex items-center justify-center text-lg font-medium text-[#490B3D]'>
            <label className=''>City</label>
            <input
              className='ml-2 border w-1/2 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value=""
              type="text" />
          </div>
          <div>
          <p><label className='border-1 border-black' for="w3review">Full Address</label></p>
          <textarea className='p-2' id="w3review" name="w3review" rows="4" cols="50" placeholder='Enter Your Full Address' />
          </div>
          <div className='flex items-center justify-center text-lg font-medium text-[#490B3D]'>
            <label className=''>State</label>
            <input
              className='ml-2 border w-1/2 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value=""
              type="text" />
          </div>
          <div className='flex items-center justify-center text-lg font-medium text-[#490B3D]'>
            <label className=''>Pin-Code</label>
            <input
              className='ml-2 border w-1/2 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              
              type="number" />
          </div>
          <div className='flex items-center justify-center text-lg font-medium text-[#490B3D]'>
            <label className=''>Clinic Contact</label>
            <input
              className='ml-2 border w-1/2 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              
              type="tel" />
          </div>
        </div>
      </div>
      
    </div>
    
    
  )
}

export default Doctor_Update_Profile
