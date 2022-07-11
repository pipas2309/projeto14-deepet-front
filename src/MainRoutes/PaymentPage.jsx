import styled from "styled-components";
import React from "react";
import Header from "../Components/Header";
import { Resume , Main , FootFixed } from "../Components/PaymentComponents";


export default function PaymentPage() {
  return (
    <>
      <Header />
      <Main>
        <h1>Pagamento</h1>
        <div className="payment" onClick={prompt("Insira seu pix")}>Pague aqui</div>
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
      </Main>
      <FootFixed>Finalizar</FootFixed>
    </>
  );
}
