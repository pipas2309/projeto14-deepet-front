import styled from "styled-components";

export const Conteiner = styled.div`
    display: grid;
    margin: 10px auto 0 auto;
    grid-template-columns: 50% 50%;
    grid-template-rows: 2;
    grid-gap: 5px;

    button {
        width: 125px;
        height: 83px;
        font-size: 19.5px;
        letter-spacing: 0.7px;
        font-weight: 500;
    }

    img {
        width: 120px;
        height: auto;
        margin: auto;
    }
`;

export const Title = styled.p`
    font-size: 32px;
    margin: 10px 0 10px 20px;
`;