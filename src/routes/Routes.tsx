import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import LoginPage from '../pages/authenPage/LoginPage'
import RegisterPage from '../pages/authenPage/RegisterPage'

export default function MainRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='register' element={<RegisterPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
