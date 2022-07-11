import styled from "styled-components";
import React from "react";
import { ProductCarousel, Footer } from "../Components/ProductComponents";
import Header from "../Components/Header";
import StarRatings from "react-star-ratings";
import { Main, Price, Shipping, Description } from "../Components/StyledComponentsProduct";
import { TbTruckDelivery } from "react-icons/tb";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"

export default function ProductPage() {
  const {id} = useParams();
  const token = JSON.parse(localStorage.getItem("userData"));
  const [products, setProducts] = useState([]);
  function filterById(obj) {
    if (obj._id===id) 
    {
      return true
    } 
    return false;
  }
  
  useEffect(() => {
    getProducts();
  }, []);
  function getProducts() {
    const promise = axios.get("https://deepet-back.herokuapp.com/product/products", {
      headers: { Authorization: `Bearer ${token.token}` },
    });
    promise.then((resp) => {
      setProducts(filterById(resp.data));
    });
    promise.catch((error) => {
      if(error===401){
        alert("Você não está logado")
      }
      console.log(error.response);
    });
  }
  const rating=5
  return (
    <>
      <Header />
      <Main>
        <h1 className="title">
          Ração Golden Power Training para Cães Adultos Sabor Frango e Arroz -
          15kg
        </h1>
        <StarRatings
          rating={rating}
          starRatedColor="yellow"
          numberOfStars={5}
          starDimension="15px"
          starSpacing="1px"
          name="rating"
        />
        <ProductCarousel />
        <Price>
          <div className="current-price">R$ 213,99</div>
        </Price>

        <Shipping>
          <TbTruckDelivery /> <span>Frete grátis</span>
        </Shipping>

        <Description>
          Trabalhamos com consumo sustentável, todos os produtos são produzidos
          especialmente para você.
          <br />
          Por isso, o prazo do frete pode parecer mais longo do que o comum,
          pois levamos entre 14 a 250 dias úteis para a entrega.
        </Description>
      </Main>
      <Footer />
    </>
  );
}
