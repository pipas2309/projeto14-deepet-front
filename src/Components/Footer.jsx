import React from "react";
import { AiFillCaretUp } from "react-icons/ai";
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import {
  Foot,
  FooterBox,
  GoTop,
  Socials,
} from "./StyledComponentFooter";


export default function Footer() {

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <FooterBox>
      <GoTop onClick={scrollTop}>
        <AiFillCaretUp />
        <p>Voltar ao topo da página</p>
      </GoTop>
      <Socials>
          <a href="http://www.instagram.com" target="_blank" rel="noreferrer"><BsInstagram />Instagram</a>
          <a href="http://www.facebook.com" target="_blank" rel="noreferrer"><BsFacebook />FaceBook</a>
          <p>Preços e condições de pagamento exclusivos para compras via internet, podendo variar nas lojas físicas. Ofertas válidas na compra de até 10 peças de cada produto por cliente, até o término dos nossos estoques para internet. Caso os produtos apresentem divergências de valores, o preço válido é o da sacola de compras. Vendas sujeitas a análise e confirmação de dados.</p>
      </Socials>
    </FooterBox>
  );
}