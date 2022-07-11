import styled from "styled-components";

export const AllOffers = styled.ul`
width: 100%;
height: 300px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
overflow-x: scroll;
padding: 0;

-ms-overflow-style: none; /* for Internet Explorer, Edge */
scrollbar-width: none; /* for Firefox */
overflow-y: scroll; 

&::-webkit-scrollbar {
display: none; /* for Chrome, Safari, and Opera */
}
`;

export const ProductContent = styled.li`
min-width: 200px;
background-color: white;
height: 295px;
margin: 0 8px;
padding: 3px 5px;
overflow: hidden;
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 5px;
box-shadow: 0 0 2px 2px lightgray;



img {
    max-width: 150px;
    height: auto;
    object-fit: contain;
    margin-bottom: 3px;
}

h2 {
    width: 100%;
    max-height: 75px;
    font-size: 20px;
    text-overflow: clip;
    white-space: normal;
    overflow: hidden;
    overflow-wrap: break-word;
    margin-bottom: 2px;
}

p {
    width: 100%;
    max-height: 25px;
    font-size: 23px;
    text-overflow: clip;
    white-space: normal;
    overflow: hidden;
    margin-bottom: 5px;
    color: #007dc5;
    font-weight: 700;
}

h4 {
    width: 100%;
    max-height: 25px;
    font-size: 23px;
    text-overflow: clip;
    white-space: normal;
    overflow: hidden;
    margin-bottom: 2px;
    color: #007dc5;
}
`;

export const Title = styled.p`
    font-size: 32px;
    margin: 10px auto 10px auto;
`;