import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import MensPage from '../Pages/MensPage'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path= "/" element={<Homepage />} />
        <Route path="/Menswear" element={<MensPage />}  />
    </Routes>
  )
}
