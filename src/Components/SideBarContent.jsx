import React from "react";
import styled from "styled-components";
import {GiOpenedFoodCan, GiSpikedCollar} from "react-icons/gi"
import {TbDogBowl , TbBone} from "react-icons/tb"
import {AiFillMedicineBox , AiOutlineShoppingCart , AiOutlineHistory} from "react-icons/ai"
import {FaToiletPaper} from "react-icons/fa"
import {BsPersonSquare , BsHeadset} from "react-icons/bs"
import { Link } from "react-router-dom";

export default function SideBarContent(){
    return(
        <div className="SideContainer">
            <SideBox>
                <ul><GiOpenedFoodCan/> Rações</ul>
                <ul><TbDogBowl/>Petiscos</ul>
                <ul><AiFillMedicineBox/>Medicina e saúde</ul>
                <ul><FaToiletPaper/>Higiene e limpeza</ul>
                <ul><TbBone/>Brinquedos</ul>
                <ul><GiSpikedCollar/>Roupas e acessórios</ul>
            </SideBox>
            <SideBox>
                <Link to={"/cart"}>
                    <ul><AiOutlineShoppingCart/>Carrinho</ul>
                </Link>
                <Link to={"/account"}>
                    <ul><BsPersonSquare/>Minha Conta</ul>
                </Link>
                <Link to={"/account"}>
                    <ul><BsHeadset/>SAC</ul>
                </Link>
                <Link to={"/orders"}>
                    <ul><AiOutlineHistory/>Meus pedidos</ul>
                </Link>
            </SideBox>
        </ div>
    )
}

const SideBox = styled.div`
    background-color: transparent;
    border-radius: 4px;
    margin:10px 10px;
    color: rgb(1, 1, 1);
    line-height: 14px;
    display: block;
`