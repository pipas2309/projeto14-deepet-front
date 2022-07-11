import styled from "styled-components";
import React from "react";
import Header from "../Components/Header";
import Accordion from "react-bootstrap/Accordion";
import { Title } from "./StyledComponentOrders";
import Table from "react-bootstrap/Table";


export default function Orders() {

    const user = {
        name: "Socorro",
        email: "mestre.dos@magos.cu",
        orders: [
            {
                productName: ["bosta", "coco", "ervilha", "papel maxê"],
                quantity: [2,2,5,20],
                address: "rua dos bobos numero 0",
                cep: "00100-020",
                price: [20,10,50,100],
                total: 170,
                deliveryTime: "3 days"
            },
            {
                productName: ["merda gostosa", "sal"],
                quantity: [1,500],
                address: "rua dos bobos numero 1",
                cep: "00100-030",
                price: [55.5,8],
                total: 63.5,
                deliveryTime: "9 days"
            }
        ]
    }

    function brl(x) {
        return new Intl.NumberFormat("pt-BR", {style: "currency", "currency":"BRL"}).format(Number(x));
    }

    return (
        <Main>
            <Header/>
            <Title>Seus Pedidos</Title>
            <Accordion>
            {user.orders.map((order, index) => {
                return (
                <Accordion.Item eventKey={index}>
                <Accordion.Header>{`Pedido nº${index + 1} - Valor total: ${brl(order.total)}`}</Accordion.Header>
                <Accordion.Body>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>                    
                        {order.productName.map((item,index) => 
                        <tr>
                            <td>{index+1}</td>
                            <td>{item}</td>
                            <td>{order.quantity[index]}</td>
                            <td>{brl(order.price[index])}</td>
                        </tr>)}                        
                    </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>)})}
            </Accordion>        
        </Main>
    );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
