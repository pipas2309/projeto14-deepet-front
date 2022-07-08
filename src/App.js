import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./MainRoutes/LandingPage"


export default function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
  );
}