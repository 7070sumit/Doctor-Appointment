import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Doctor_Header from './Doctor_Header'
import cheerio from 'cheerio'
import axios from 'axios'
import { Link } from 'react-router-dom';






function Doctor_Home() {
  const location = useLocation();
  const doctorInfo = location.state
  const [filePopup, setFilePopup] = useState(false)
  const [profilePicture, setProfilePicture] = useState(null)
  const [dp, setDp] = useState(doctorInfo.profilePicture)

  async function changeProfilePicture() {
    if (!profilePicture) {
      alert("Please select a file.")
      return
    }
    const formData = new FormData();
    formData.append('profilePicture', profilePicture);

    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.patch(
        'https://doctor-appointment-ashy.vercel.app/api/v1/doctor/update-profile-picture',
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setDp(response.data.data.profilePicture)
      setFilePopup(false)
      doctorInfo.profilePicture=response.data.data.profilePicture
      console.log("Dp");
    } catch (error) {
      console.log("in Error");
      console.log(error);


      // setErrorMessage(error.response.data.message) 
    }

  }

  // const fetchDoctorInfo =async ()=> {
  //   try {
  //     const accessToken = localStorage.getItem('accessToken');
  //     const response = await axios.get('https://doctor-appointment-ashy.vercel.app/api/v1/doctor/get-doctor', {
  //       withCredentials: true,
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     })
  //     setDoctorInfo(response.data.data)
  //   } catch (error) {
  //     const $ = cheerio.load(error.response.data);
  //           const apiErrorMessage = $('pre').text().trim();
  //           const errorMessage = apiErrorMessage.replace(/^Error: /, '').split('at')[0].trim();
  //           console.log(errorMessage);

  //   }
  // }

  // useEffect(() => {
  //   fetchDoctorInfo();
  // }, [doctorInfo]);



  return (
    <div className='flex flex-col lg:flex-row '>
      <div>
        <Doctor_Header doctorInfo={doctorInfo} />
      </div>


      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:pl-5 w-full flex flex-col">
          <div className="h-24 border bg-gradient-to-r from-gray-300 to-yellow-700"></div>
          <div className="flex flex-col items-center lg:flex-row px-3 gap-x-2 lg:h-40">
            <div className="relative -top-8 lg:-top-8 md:-top-10 flex items-center justify-center">
              <img
                className="w-32  h-32 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px] rounded-full shadow-lg shadow-[#BD1E51]"
                src={dp}
                alt="User Profile Picture"
              />
              <button
              onClick={(e)=>(setFilePopup(!filePopup))} 
              className="p-1 relative top-10 md:top-16 lg:top-[70px] -left-4 md:-left-6 lg:-left-10 border border-white bg-[#F1B814] rounded-full hover:bg-[#f7d56e] duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="#BD1E51"
                >
                  <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                </svg>
              </button>


              {filePopup && (
                <div className='p-1 w-[100%] h-36 border absolute top-36 md:top-52  lg:top-52 lg:left-6 bg-white rounded-xl'>
                  <h1 className='text-lg font-medium text-[#490B3D]'>Change your Profile Picture</h1>
                  <input

                    className='mt-5'
                    type="file"
                    onChange={(e) => (setProfilePicture(e.target.files[0]))}
                  />
                  <button

                    onClick={changeProfilePicture}
                    className='mt-6 ml-16 px-4 py-[2px] bg-[#BD1E51] text-white font-medium rounded-lg hover:bg-[#e0386e]'>Change</button>
                </div>

              )
              }






            </div>
            <div className="px-5 py-5 w-full lg:w-3/4 flex items-start justify-between">
              <div className="text-[#490B3D] flex flex-col gap-y-1">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium">
                  <span className="text-2xl md:text-3xl lg:text-4xl">Dr. </span>{doctorInfo.firstName} {doctorInfo.lastName}
                </p>
                <p className="text-lg md:text-xl">{doctorInfo.degree}</p>
                <p className="text-lg md:text-xl">{doctorInfo.specialization}</p>
              </div>
              <div>
                <Link
                  to='/doctor/update-profile'
                  state={doctorInfo}
                  className="flex border p-1 px-3 rounded-lg bg-gray-200 hover:bg-gray-100 duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                  </svg>
                  <p>Edit Profile</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col lg:flex-row items-center justify-center">
            <hr className="border w-11/12 border-[#F1B814]" />
          </div>

          <div className="p-4 mt-4 flex flex-col gap-y-5 h-36">
            <h1 className="text-xl md:text-2xl font-medium">Contact Information</h1>
            <ul className="ml-12 flex flex-col lg:flex-row gap-x-14 gap-y-5">
              <li className="flex gap-x-5 text-lg font-medium w-full lg:w-[40%]">
                <p>Email:</p>
                <input
                  className="border rounded-lg border-gray-300 bg-white px-2 w-full lg:w-5/6 hover:cursor-not-allowed"
                  disabled
                  value={doctorInfo.email}
                  type="text"
                />
              </li>
              <li className="flex gap-x-5 text-lg font-medium w-full lg:w-1/4">
                <p>Phone:</p>
                <input
                  className="border rounded-lg border-gray-300 bg-white px-2 w-full lg:w-5/6 hover:cursor-not-allowed"
                  disabled
                  value={doctorInfo.phone}
                  type="Number"
                />
              </li>
            </ul>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <hr className="border w-11/12 border-[#F1B814]" />
          </div>

          <div className="mt-4 p-4">
            <h1 className="text-xl md:text-2xl font-medium">Weekly Schedule</h1>
            <div className="px-3 py-2 mt-4 w-full lg:w-2/4 flex items-center justify-around">
              <div className="p-2 md:p-3 rounded-md flex items-center justify-center bg-green-300 text-green-900">
                <h1>MON</h1>
              </div>
              <div className="p-2 md:p-3 rounded-md flex items-center justify-center bg-green-300 text-green-900">
                <h1>TUE</h1>
              </div>
              <div className="p-2 md:p-3 rounded-md flex items-center justify-center bg-green-300 text-green-900">
                <h1>WED</h1>
              </div>
              <div className="p-2 md:p-3 rounded-md flex items-center justify-center bg-green-300 text-green-900">
                <h1>THUR</h1>
              </div>
              <div className="p-2 md:p-3 rounded-md flex items-center justify-center bg-green-300 text-green-900">
                <h1>FRI</h1>
              </div>
              <div className="p-2 md:p-3 rounded-md flex items-center justify-center bg-red-300 text-red-900">
                <h1>SAT</h1>
              </div>
              <div className="p-2 md:p-3 rounded-md flex items-center justify-center bg-red-300 text-red-900">
                <h1>SUN</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Doctor_Home
