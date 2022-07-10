import React from "react";
import Logo from "../imgs/Logo.png";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion/dist/es/index";
import { useState } from "react";
import {
  Head,
  HeaderBox,
  SearchForm,
  SideBar,
  SideBarHeader,
  Theme
} from "./StyledComponentHeader";
import SideBarContent from "./SideBarContent";
import {Link} from "react-router-dom";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function Header() {
  const [isOn, setIsOn] = useState(false);
  const [side, setSide] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const toggleSide = () => setSide(!side);
  return (
    <HeaderBox>
      <Head>
        <img src={Logo} alt="logo" className="logo" />
        <SearchForm>
          <button type="submit">
            <AiOutlineSearch />
          </button>
          <input type="text" placeholder="Estou buscando..." />
          <button type="reset" id="reset" onClick={
            () => document.getElementById("reset").blur()
            /* Não sei fazer de uma forma melhor */ 
            }>
            <AiOutlineCloseCircle />
          </button>
        </SearchForm>
        <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
          
        </div>
        <Theme inputColor={isOn}>{isOn ? "Dark" : "Light"}</Theme>
        <AiOutlineMenu onClick={toggleSide} />
      </Head>
      <SideBar className="menu" right={side ? "0" : "-80%"}>
        <SideBarHeader>
          <div>
            <div className="photo">
              <AiOutlineUser />
            </div>
            <h3>Bem-vindo</h3>
            <p>Entra na sua conta para ver suas compras, pedidos, etc...</p>
          </div>
          <div className="buttonBox">
            <Link to={'/login'}>
              <div className="enterButton">Entre</div>
            </Link>
            <Link to={'/register'}>
              <div className="registerButton">Crie sua conta</div>
            </Link>
            
          </div>
        </SideBarHeader>
        <SideBarContent />
      </SideBar>
      <div
        className={`overlay ${!side ? "hidden" : ""}`}
        onClick={toggleSide}
      ></div>
    </HeaderBox>
  );
}