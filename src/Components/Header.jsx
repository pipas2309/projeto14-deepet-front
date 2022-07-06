import styled from "styled-components";
import React from "react";
import Logo from "../imgs/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  return (
    <HeaderBox>
      <Head>
        <img src={Logo} alt="logo" />
        <SearchForm>
            <button></button>
          <input type="text" placeholder="Estou buscando..." />
        </SearchForm>
        <AiOutlineMenu />
      </Head>
    </HeaderBox>
  );
}

const Head = styled.header`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  svg {
    padding-right: 10px;
    width: 50px;
    height: 20px;
  }
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 48px;
  background-color: #fff159;
  img {
    width: 79px;
    height: 90%;
  }
`;

const SearchForm = styled.form`
  height: 32px;
  width: 87%;
  padding: 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 7px 0px 7px rgba(0, 0, 0, 0.04);
  input {
    color: #333;
    border: none;
    width: 100%;
    font-size: 16px;
  }
`;
