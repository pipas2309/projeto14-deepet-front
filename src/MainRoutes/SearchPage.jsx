import styled from "styled-components";
import React from "react";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import Department from "../Components/Department";
import BestSellers from "../Components/BestSellers";
import { useParams } from "react-router-dom";

export default function SearchPage() {

  const { filter } = useParams(); 

  console.log(filter)

  return (
    <Main>
      <Header/>
      <Offers />
      <BestSellers />
      <Department />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;