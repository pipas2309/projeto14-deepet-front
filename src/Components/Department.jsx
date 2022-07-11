import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

export default function Department() {

    return (
        <>
            <Title>Top categorias</Title>
            <Departments>
                <Button type="submit">Rações</Button> 
                <Button type="submit">Petiscos</Button>
                <Button type="submit">Medicina e saúde</Button>
                <Button type="submit">Higiene e limpeza</Button>
                <Button type="submit">Brinquedos</Button>
                <Button type="submit">Roupas e acessórios</Button>
            </Departments>
        </>
    );    

}

export const Departments = styled.div`
    display: grid;
    margin: 10px auto 0 auto;
    grid-template-columns: 50% 50%;
    grid-template-rows: 2;

    button {
        width: 175px;
        height: 42px;
        margin: 0 7px 14px 7px;
    }
`; 

export const Title = styled.p`
    font-size: 32px;
    margin: 10px auto 10px auto;
`;