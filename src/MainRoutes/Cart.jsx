import React from "react";
import Header from "../Components/Header";
import {
  Main,
  Wall,
  ProductList,
  Cep,
  Resume,
  FooterInfo,
  FootFixed,
} from "../Components/StyledComponentsCart";
import ração1 from "../imgs/ração1.webp";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <Header />
      <Main>
        <h1>MEU CARRINHO</h1>
        <Wall></Wall>
        <ProductList>
          <div>
            <div className="product-cart-info">
              <div className="cart-image">
                <img src={ração1} alt="produto n" />
              </div>
              <div className="cart-info">
                <h3>
                  {" "}
                  Ração Golden Power Training para Cães Adultos Sabor Frango e
                  Arroz - 15kg
                </h3>
              </div>
            </div>
            <div className="price-cart-info">
              <div>quantidade</div>
              <div>Valor</div>
            </div>
          </div>
        </ProductList>
        <Wall />
        <Cep>
          <p>Calcule seu prazo de entrega:</p>
          <form>
            {" "}
            <input type="text" />
            <button>Calcular</button>
          </form>
        </Cep>
        <Wall />
        <Resume>
          <h2>RESUMO</h2>
          <section>
            <div>
              Subtotal <span>R$ Valor</span>
            </div>
            <div>
              Frete <span>R$ Valor</span>
            </div>
            <div>
              Total <span>R$ Valor</span>
            </div>
          </section>
        </Resume>
        <Wall />
        <FooterInfo>
          <Link to={"/"}>ESCOLHER MAIS PRODUTOS</Link>{" "}
        </FooterInfo>
      </Main>
      <FootFixed>
        <div>R$ Total</div>
        <button>
          <Link to={"/payment"}>CONTINUAR</Link>
        </button>
      </FootFixed>
    </>
  );
}
