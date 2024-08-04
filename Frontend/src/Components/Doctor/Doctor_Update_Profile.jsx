import React from 'react'
import Doctor_Header from './Doctor_Header'

function Doctor_Update_Profile(props) {
  return (
    <div className='flex flex-col '>
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
          <div className='flex items-center justify-start  text-lg font-medium text-[#490B3D]'>
            <label className='p-2' for="experience">Experience: </label>
              <select className='border-2 border-[#F1B814]' name="Experience" id="Experience">
                
                <option value="" className=''>0-2 Years</option>
                <option value="" className=''>2-5 Years</option>
                <option value="" className=''>5-7 Years</option>
                <option value="" className=''>7 & Above</option>
              </select>
          </div>
          <div className='flex items-center justify-start p-2 text-lg font-medium text-[#490B3D]'>
            <label className=''>Degree: </label>
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
            <h1 className='font-bold underline decoration-[#BD1E51] underline-offset-4'>Clinic Address :</h1>
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
          <p><label className='' for="w3review">Full Address</label></p>
          <textarea className='p-2 border-2 border-[#BD1E51]' id="w3review" name="w3review" rows="4" cols="50" placeholder='Enter Your Full Address' />
          </div>
          <div className='flex items-center justify-center  text-lg font-medium text-[#490B3D]'>
            <label className='p-2' for="state">State</label>
            <select className='border-2 border-[#F1B814]' name="state" id="state">
              <option value="" className='text-slate-400'>Select state</option>
              <option value="AN">Andaman and Nicobar Islands</option>
              <option value="AP">Andhra Pradesh</option>
              <option value="AR">Arunachal Pradesh</option>
              <option value="AS">Assam</option>
              <option value="BR">Bihar</option>
              <option value="CH">Chandigarh</option>
              <option value="CT">Chhattisgarh</option>
              <option value="DN">Dadra and Nagar Haveli</option>
              <option value="DD">Daman and Diu</option>
              <option value="DL">Delhi</option>
              <option value="GA">Goa</option>
              <option value="GJ">Gujarat</option>
              <option value="HR">Haryana</option>
              <option value="HP">Himachal Pradesh</option>
              <option value="JK">Jammu and Kashmir</option>
              <option value="JH">Jharkhand</option>
              <option value="KA">Karnataka</option>
              <option value="KL">Kerala</option>
              <option value="LA">Ladakh</option>
              <option value="LD">Lakshadweep</option>
              <option value="MP">Madhya Pradesh</option>
              <option value="MH">Maharashtra</option>
              <option value="MN">Manipur</option>
              <option value="ML">Meghalaya</option>
              <option value="MZ">Mizoram</option>
              <option value="NL">Nagaland</option>
              <option value="OR">Odisha</option>
              <option value="PY">Puducherry</option>
              <option value="PB">Punjab</option>
              <option value="RJ">Rajasthan</option>
              <option value="SK">Sikkim</option>
              <option value="TN">Tamil Nadu</option>
              <option value="TG">Telangana</option>
              <option value="TR">Tripura</option>
              <option value="UP">Uttar Pradesh</option>
              <option value="UT">Uttarakhand</option>
              <option value="WB">West Bengal</option>

            </select>
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
