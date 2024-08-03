import React from 'react'
import Doctor_Header from './Doctor_Header'

function Doctor_Update_Profile() {
  return (
    <div className='flex'>
      <div>
        <Doctor_Header />
      </div>
      <div className='px-20 py-10 w-full'>
        <div className='grid grid-cols-2 border border-green-300'>
          <div className='flex items-center justify-center text-lg font-medium text-[#490B3D]'>
            <label className=''>Firstname:</label>
            <input
              className='ml-2 border w-1/2 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value="Sumit"
              type="text" />
          </div>
          <div className='flex items-center justify-center text-lg font-medium text-[#490B3D]'>
            <label className=''>Lastname:</label>
            <input
              className='ml-2 border w-1/2 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value="Sumit"
              type="text" />
          </div>
          <div className='flex items-center justify-center text-lg font-medium text-[#490B3D]'>
            <label className=''>Email:</label>
            <input
              className='ml-2 border w-1/2 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value="Sumit"
              type="text" />
          </div>
          <div className='flex items-center justify-center text-lg font-medium text-[#490B3D]'>
            <label className=''>Phone:</label>
            <input
              className='ml-2 border w-1/2 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value="Sumit"
              type="text" />
          </div>
          <div className='flex items-center justify-center text-lg font-medium text-[#490B3D]'>
            <label className=''>Specialization:</label>
            <input
              className='ml-2 border w-1/2 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value="Sumit"
              type="text" />
          </div>
          <div className='flex items-center justify-center text-lg font-medium text-[#490B3D]'>
            <label className=''>Experience:</label>
            <input
              className='ml-2 border w-1/2 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value="Sumit"
              type="text" />
          </div>
          <div className='flex items-center justify-center text-lg font-medium text-[#490B3D]'>
            <label className=''>Degree:</label>
            <input
              className='ml-2 border w-1/2 outline-0 rounded-lg p-[1px] pl-3 text-[#BD1E51]'
              value="Sumit"
              type="text" />
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor_Update_Profile
