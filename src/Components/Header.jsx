import React from "react";
import Logo from "../imgs/Logo.png";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { motion } from "framer-motion/dist/es/index";
import { useState } from "react";
import {
  Head,
  HeaderBox,
  SearchForm,
  SideBar,
  SideBarHeader,
} from "./StyledComponentHeader";
import SideBarContent from "./SideBarContent";

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
          <button>
            <AiOutlineSearch />
          </button>
          <input type="text" placeholder="Estou buscando..." />
        </SearchForm>
        <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
        </div>
        <AiOutlineMenu onClick={toggleSide} />
      </Head>
      <SideBar className="menu" right={side ? "0" : "-80%"}>
        <SideBarHeader>
          <div>
            <div className="photo">
              <AiOutlineUser />
            </div>
            <h3>Bem-vindo</h3>
            <p>Entra na sua conta para ver suas compras, favoritos etc.</p>
          </div>
          <div className="buttonBox">
            <div className="enterButton">Entre</div>
            <div className="registerButton">Crie sua conta</div>
          </div>
        </SideBarHeader>
        <SideBarContent/>
      </SideBar>
      <div
        className={`overlay ${!side ? "hidden" : ""}`}
        visibility={side?"visible":"hidden"}
        onClick={toggleSide}
      ></div>
    </HeaderBox>
  );
}
