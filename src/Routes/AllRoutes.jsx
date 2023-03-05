import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';
import MensPage from '../Pages/MensPage';
import ProductDetails from '../Pages/ProductDetails';
import SignUp from '../Pages/SignUp';
import WomensPage from '../Pages/WomensPage';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/menswear" element={<MensPage />} />
      <Route path="/Menswear/:id" element={<ProductDetails />} />
      <Route path="/womenswear" element={<WomensPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
