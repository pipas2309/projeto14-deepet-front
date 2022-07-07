import styled from "styled-components";
import React from "react";
import Logo from "../imgs/Logo.png";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {motion} from 'framer-motion/dist/es/index'
import { useState } from "react";

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };


export default function Header() {
    const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <HeaderBox>
      <Head>
        <img src={Logo} alt="logo" className="logo" />
        <SearchForm>
          <button>
            <AiOutlineSearch />
          </button>
          <input type="text" placeholder="Estou buscando..." />
        </SearchForm>
        <AiOutlineMenu />
        <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
        </div>
      </Head>
    </HeaderBox>
  );
}

const Head = styled.header`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  .switch {
    width: 50px;
    height: 30px;
    background-color: rgba(120, 92, 92, 0.4);
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
  }

  .handle {
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 40px;
    margin-bottom: 10px;;
  }

  .switch[data-isOn="true"] {
    justify-content: flex-end;
  }
  svg {
    padding-right: 10px;
    width: 50px;
    height: 20px;
    margin: 15px 0px;
  }
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 48px;
  background-color: #fff159;
  .logo {
    width: 79px;
    height: 90%;
  }
`;

const SearchForm = styled.form`
  height: 32px;
  width: 75%;
  margin: 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 7px 0px 7px rgba(0, 0, 0, 0.04);
  input {
    color: #333;
    border: none;
    width: 90%;
    font-size: 16px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100%;
    border: none;
    background-color: #ffffff;
    svg {
      width: 30px;
      height: 30px;
      color: gray;
    }
  }
`;
