import styled from "styled-components";
import React from "react";
import Logo from "../imgs/Logo.png";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import RegisterForms from "../Components/RegisterForms";

export default function RegisterPage() {
  const navigate = useNavigate();
  return (
    <Main>
      <IoChevronBackCircleOutline onClick={() => navigate(-1)} />
      <img src={Logo} alt="Logo" />
      <h1>Cadastre-se</h1>
      <RegisterForms />
      <p>
        Já possui uma conta?{" "}
        <Link to={"/register"}>
          <span> Faça login </span>
        </Link>
      </p>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9fafb;
  padding-bottom: 100px;
  svg {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
  }
  img {
    width: 170px;
    height: 120px;
    margin-top: 50px;
    margin-bottom: 100px;
  }
  h1 {
    width: 158px;
    height: 22px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -1px;
    color: #040415;
  }
  p {
    color: #040415;
    opacity: 0.4;
    align-items: center;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
  }
  span {
    color: #fc6828;
  }
`;
const Wall = styled.div`
  margin: 34px 0;
  height: 1px;
  width: 88%;
  background-color: #c4c4c4;
`;
