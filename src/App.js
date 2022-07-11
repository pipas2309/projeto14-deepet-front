import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./MainRoutes/LandingPage"
import LoginPage from "./MainRoutes/LoginPage";
import RegisterPage from "./MainRoutes/RegisterPage";
import ProductPage from "./MainRoutes/ProductPage";
import Cart from "./MainRoutes/Cart"
import PaymentPage from "./MainRoutes/PaymentPage";


export default function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path= "/cart" element = {<Cart />} />
            <Route path="/payment" element = {<PaymentPage/>} />
          </Routes>
        </BrowserRouter>
  );
}