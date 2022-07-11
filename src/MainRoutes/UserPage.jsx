import styled from "styled-components";
import React from "react";
import Header from "../Components/Header";
import UserContainer from "../Components/UserContainer";
import Footer from "../Components/Footer";


export default function UserPage() {

    const user = {
        name: "Socorro",
        email: "mestre.dos@magos.cu",
        orders: [
            {
                productName: "bosta",
                quantity: "2",
                address: "rua dos bobos numero 0",
                cep: "00100-020",
                price: 20,
                deliveryTime: "3 days"
            },
            {
                productName: "merda gostosa",
                quantity: "1",
                address: "rua dos bobos numero 1",
                cep: "00100-030",
                price: 55.5,
                deliveryTime: "9 days"
            }
        ]
    }

    return (
        <Main>
            <Header/>
            <UserContainer user={user}/>
            <Footer/>
        </Main>
    );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
