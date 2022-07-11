import styled from "styled-components";
import React from "react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function PostProducts() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [price, setPrice] = useState(0);
  const [security, setSecurity] = useState("");
  const [images, setImages] = useState([]);
  const [departament, setDepartament] = useState({});
  const [address, setAddress] = useState("13201-837");
  const [seller, setSeller] = useState("Deepet");
  const [quantity, setQuantity] = useState(0);
  const [review, setReview] = useState(0);
  const [off, setOff] = useState(0);
  

  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postProduct = { name, description, images, features, price, departament, address, seller, quantity, review, off };

      const config = {
        headers: {
            "Authorization": security
        }
      }

      console.log(postProduct, config)

      const response = await axios.post(
        "https://deepet-back.herokuapp.com/product/products",
        postProduct, config
      );

      return console.log('deu certo')

    } catch (err) {
      if (!err?.response) {
        setErrMsg("Sem resposta do servidor");
      } else if (err.response?.status === 409) {
        setErrMsg("Usuário cadastrado / Email Cadastrado");
      } else {
        setErrMsg("Falha no registro");
      }

    }
  };

  function image (value, arr) {
    const aux = [...images]
    if(arr === 0) {
      aux[0] = value;
      setImages(aux);
    }
    if(arr === 1) {
      aux[1] = value;
      setImages(aux);
    }
    if(arr === 2) {
      aux[2] = value;
      setImages(aux);
    }
  }

  function depart (value, arr) {
    const aux = {...departament}
    if(arr === 0) {
      aux.name = value;
      setDepartament(aux)
    }
    if(arr === 1) {
      aux.market = value;
      setDepartament(aux)
    }
  }


  return (
    <Main>
      <Title>Cadastre novos produtos</Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Senha para cadastro</Form.Label>
          <Form.Control type="password" placeholder="Insira o nome aqui..." onChange={(e) => setSecurity(e.target.value)} value={security} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nome do produto</Form.Label>
          <Form.Control placeholder="Insira o nome aqui..." onChange={(e) => setName(e.target.value)} value={name} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control placeholder="Insira a descrição aqui..." onChange={(e) => setDescription(e.target.value)} value={description} />
          <Form.Label>Características</Form.Label>
          <Form.Control placeholder="Insira as caracteristicas aqui..." disabled value={features} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Preço</Form.Label>
          <Form.Control placeholder="Insira a descrição aqui..." onChange={(e) => setPrice(e.target.value)} value={price} />
          <Form.Label>Quantidade</Form.Label>
          <Form.Control placeholder="Insira as caracteristicas aqui..." onChange={(e) => setQuantity(e.target.value)} value={quantity} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>URL da Imagem 1</Form.Label>
          <Form.Control placeholder="Insira a url aqui..." onChange={(e) => image(e.target.value, 0)} value={images[0]} />
          <Form.Label>URL da Imagem 2</Form.Label>
          <Form.Control placeholder="Insira a url aqui..." onChange={(e) => image(e.target.value, 1)} value={images[1]} />
          <Form.Label>URL da Imagem 3</Form.Label>
          <Form.Control placeholder="Insira a url aqui..." onChange={(e) => image(e.target.value, 2)} value={images[2]} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Vendedor</Form.Label>
          <Form.Control placeholder="Insira o nome aqui..." onChange={(e) => setSeller(e.target.value)} value={seller} disabled/>
          <Form.Label>Endereço do vendedor</Form.Label>
          <Form.Control placeholder="Insira o endereço aqui..." onChange={(e) => setAddress(e.target.value)} value={address} disabled/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Avaliação</Form.Label>
          <Form.Control placeholder="Insira a avaliação aqui..." onChange={(e) => setReview(e.target.value)} value={review} />
          <Form.Label>Desconto inicial</Form.Label>
          <Form.Control placeholder="Insira o desconto aqui..." onChange={(e) => setOff(e.target.value)} value={off} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria do produto</Form.Label>
          <Form.Control placeholder="Insira a categoria aqui..." onChange={(e) => depart(e.target.value, 0)} value={departament.name} />
          <Form.Label>Qual Tema, Pet ou Deepet? </Form.Label>
          <Form.Control placeholder="Pet ou Deepet apenas!" onChange={(e) => depart(e.target.value, 1)} value={departament.market} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Main>

  );
}

const Title = styled.p`
    font-size: 32px;
    margin: 10px 0 10px 20px;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 42px 15px 60px 15px;
`;