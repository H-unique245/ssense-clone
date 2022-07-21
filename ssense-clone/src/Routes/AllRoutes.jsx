import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Login from '../Pages/Login'
import MensPage from '../Pages/MensPage'
import { SignUp } from '../Pages/SignUp'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path= "/" element={<Homepage />} />
        <Route path="/Menswear" element={<MensPage />}  />
        <Route path="/login" element={<Login/>}/>
        <Route path="//signup" element={<SignUp/>}/>
    </Routes>
  )
}
