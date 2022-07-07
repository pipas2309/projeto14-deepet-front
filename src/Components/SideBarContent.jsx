import React from "react";
import styled from "styled-components";

export default function SideBarContent(){
    return(
        <div className="SideContainer">
            <SideBox>
                <ul>Meus favoritos</ul>
                <ul>Cachorros</ul>
                <ul>Gatos</ul>
            </SideBox>
        </ div>
    )
}

const SideBox = styled.div`
    background-color: white;
    border-radius: 4px;
    margin:10px 10px;
    color: rgb(1, 1, 1);
    line-height: 14px;
    display: block;
`