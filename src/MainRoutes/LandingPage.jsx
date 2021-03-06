import styled from "styled-components";
import React from "react";
import Header from "../Components/Header";
import Banners from "../Components/Banners";
import Offers from "../Components/Offers";
import Department from "../Components/Department";
import BestSellers from "../Components/BestSellers";
import Footer from "../Components/Footer";

export default function LandingPage() {
  return (
    <Main>
      <Header />
      <Banners />
      <Offers />
      <BestSellers />
      <Department />
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;