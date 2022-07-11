import styled from "styled-components";
import React from "react";
import Header from "../Components/Header";
import Banners from "../Components/Banners";
import Offers from "../Components/Offers";

export default function LandingPage() {
  return (
    <Main>
      <Header/>
      <Banners />
      <Offers />
      {/* <BestSellers /> */}
      {/* <Department /> */}
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;