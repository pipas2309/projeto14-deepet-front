import React from "react";
import styled from "styled-components";
import {GiOpenedFoodCan, GiSpikedCollar} from "react-icons/gi"
import {TbDogBowl , TbBone} from "react-icons/tb"
import {AiFillMedicineBox , AiOutlineShoppingCart , AiOutlineHistory} from "react-icons/ai"
import {FaToiletPaper} from "react-icons/fa"
import {BsPersonSquare , BsHeadset} from "react-icons/bs"

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
                <ul><AiOutlineShoppingCart/>Carrinho</ul>
                <ul><BsPersonSquare/>Minha Conta</ul>
                <ul><BsHeadset/>SAC</ul>
                <ul><AiOutlineHistory/>Meus pedidos</ul>
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