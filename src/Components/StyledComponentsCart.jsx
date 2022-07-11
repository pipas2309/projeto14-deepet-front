import styled from "styled-components";
import React from "react";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  h1 {
    margin-top: 24px;
    margin-bottom: 8px;
    font-size: 16px;
  }
`;

export const Wall = styled.div`
  height: 1px;
  width: 100%;
  background-color: #c4c4c4;
`;

export const ProductList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .product-cart-info {
    display: flex;
    margin-top: 34px;
  }
  img {
    width: 100%;
    height: 96px;
  }
  .cart-image {
    width: 96px;
    height: 160px;
  }
  .cart-info {
    margin-left: 24px;
    width: 60%;
    height: 160px;
    text-decoration: none;
    display: block;
    font-weight: 500;
    color: rgb(108, 108, 108);
    font-size: 14px;
    margin-right: 22px;
  }
  h3 {
    font-size: 14px;
  }
  .price-cart-info {
    width: 100%;
    display: flex;
    padding: 16px 0px;
    justify-content: space-between;
  }
`;

export const Cep = styled.div`
  width: 100%;
  margin-bottom: 20px;
  p {
    color: rgb(135, 135, 135);
    font-size: 12px;
    line-height: 16px;
    margin-top: 20px;
  }
  form {
    display: flex;
    justify-content: center;
  }
  input {
    height: 33px;
    border: 1px solid rgb(231, 231, 231);
    padding-left: 14px;
    font-size: 12px;
    color: rgb(174, 174, 174);
    flex: 1 1 auto;
    width: 70%;
  }
  button {
    width: 80px;
    color: rgb(255, 255, 255);
    font-size: 12px;
    height: 35px;
    padding: 0px 8px;
    background: rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const Resume = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  h2 {
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    color: rgb(108, 108, 108);
    margin: 0px 0px 11px 32px;
  }
  section {
    color: rgb(135, 135, 135);
    background-color: rgb(250, 250, 250);
    display: flex;
    flex-flow: column nowrap;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    div {
      padding: 20px 33px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const FooterInfo = styled.div`
  -webkit-box-pack: center;
  -webkit-box-align: center;
  background: rgb(255, 255, 255);
  color: rgb(174, 174, 174) !important;
  border: 1px solid rgb(231, 231, 231);
  height: 40px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin:auto;
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
  user-select: none;
  margin-top:25px;
  text-decoration:none;
`;

export const FootFixed = styled.footer`
width:100%;
height:63px;
position:fixed;
right:0px;
bottom:0px;
display:flex;

div{
    width:50%;
    display:flex;
    align-items:center;
    padding-left:16px;
    font-size:24px;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px 0px;
}
button{
    border:none;
    width:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background: rgb(82, 177, 47);
    color: rgb(255, 255, 255) !important;
}
`;
