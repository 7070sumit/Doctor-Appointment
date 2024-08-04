import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {
  //User Imports
  User,
  User_Signin,
  User_Signup,

  //Doctor Imports
  
  Doctor_Signin,
  Doctor_Signup,
  Doctor_Home,
  Doctor_Availability,
  Doctor_Mark_Leave,
  Doctor_Setting,
  Doctor_Update_Profile,
  Doctor_Appointments,

} from './Components'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>
    <Route path='/doctor'>
    <Route path='home' element={<Doctor_Home/>} />
    <Route path='availability' element={<Doctor_Availability/>} />
    <Route path='mark-leave' element={<Doctor_Mark_Leave/>} />
    <Route path='appointments' element={<Doctor_Appointments/>} />
    <Route path='setting' element={<Doctor_Setting/>} />
    <Route path='update-profile' element={<Doctor_Update_Profile/>} />
    </Route>
    <Route path='/' element={<Layout />}>
      <Route path='user'>
        <Route path='login' element={<User_Signin/>} />
        <Route path='register' element={<User_Signup/>} />
      </Route>
      <Route path='doctor'>
        <Route path='login' element={<Doctor_Signin/>} />
        <Route path='register' element={<Doctor_Signup/>} />
        <Route path='home' element={<Doctor_Home/>} />
      </Route>
      </Route>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
