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

} from './Components'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout />}>
      <Route path='user'>
        <Route path='login' element={<User_Signin/>} />
        <Route path='register' element={<User_Signup/>} />
      </Route>
      <Route path='doctor'>
        <Route path='login' element={<Doctor_Signin/>} />
        <Route path='register' element={<Doctor_Signup/>} />
      </Route>

    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
