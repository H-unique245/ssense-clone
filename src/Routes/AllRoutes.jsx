import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';
import MensPage from '../Pages/MensPage';
import SignUp from '../Pages/SignUp';
import WomensPage from '../Pages/WomensPage';
import MensProductCard from '../Components/MensProductCard';
import WomensProductCard from '../Components/WomensProductCard';
import EverythingPage from '../Pages/Everything';
import SalesPage from '../Pages/Sales';
import EverythingProductCard from '../Components/EverythingProduct';
import SalesProductCard from '../Components/SalesProduct';
import ShoppingBag from '../Pages/ShoppingBag';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/menswear" element={<MensPage />} />
      <Route path="/Menswear/:id" element={<MensProductCard />} />
      <Route path="/womenswear" element={<WomensPage />} />
      <Route path="/womenswear/:id" element={<WomensProductCard />} />
      <Route path="/everything-else" element={<EverythingPage />} />
      <Route path="/everything-else/:id" element={<EverythingProductCard />} />
      <Route path="/sale" element={<SalesPage />} />
      <Route path="/sale/:id" element={<SalesProductCard />} />
      <Route path="/checkout" element={<ShoppingBag />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
  );
}
