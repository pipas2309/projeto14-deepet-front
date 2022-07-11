import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./MainRoutes/LandingPage"
import LoginPage from "./MainRoutes/LoginPage";
import RegisterPage from "./MainRoutes/RegisterPage";
import SearchPage from "./MainRoutes/SearchPage";
import UserPage from "./MainRoutes/UserPage";
import ProductPage from "./MainRoutes/ProductPage";
import Cart from "./MainRoutes/Cart"
import Orders from "./Components/Orders";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products/:filter" element={<SearchPage />} />
        <Route path="/account" element={<UserPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path= "/cart" element = {<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}