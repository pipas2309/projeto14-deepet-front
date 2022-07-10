import styled from "styled-components";
import React from "react";
import Header from "../Components/Header";

export default function LandingPage() {
  return (
    <Main>
      <Header/>
      {/* <Banners /> */}
      {/* <Offers /> */}
      {/* <BestSellers /> */}
      {/* <Department /> */}
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;