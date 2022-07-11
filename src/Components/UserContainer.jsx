import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import orders from "../imgs/orders.png";
import sac from "../imgs/sac.png";
import secure from "../imgs/secure.png";
import favorite from "../imgs/favorite.png";
import { Conteiner, Title } from "./StyledComponentUser";
import { useNavigate } from "react-router-dom";


export default function UserContainer({ user }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    return (
        <>
            <Title>Olá, {user.name}</Title>
            <Conteiner>
                <Card style={{ width: '160px' }}>
                    <Card.Img variant="top" src={orders} />
                    <Card.Body>
                        <Button variant="primary" onClick={() => navigate("/orders")}>Seus Pedidos</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '160px' }}>
                    <Card.Img variant="top" src={secure} />
                    <Card.Body>
                        <Button variant="primary">Segurança</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '160px' }}>
                    <Card.Img variant="top" src={sac} />
                    <Card.Body>
                        <Button variant="primary" onClick={handleShow}>S.A.C</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '160px' }}>
                    <Card.Img variant="top" src={favorite} />
                    <Card.Body>
                        <Button variant="primary">Favoritos</Button>
                    </Card.Body>
                </Card>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Atendimento ao cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>E-mail para contato</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="nome@exemplo.com"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                                >
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={(e) => handleClose(e)}>
                            Enviar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Conteiner>
        </>
    );    
}

