import styled from "styled-components";

export const FooterBox = styled.footer`
  width: 100%;
  height: 350px;
  background-color: #fff159;
  border-bottom: 120px solid #fff159;
`;

export const Socials = styled.div`
font-size: 40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
a {
  text-decoration: none;
  color: black;
}
svg {
  margin-right: 20px;
}
p {
  font-size: 12px;
  margin: 5px 10px;
}
em {
  font-size: 18px;
  text-decoration: underline;
}
`;

export const GoTop = styled.button`
  width: 100%;
  height: 47px;
  bottom: 0;
  background-color: #7a7a25;
  color: white;
  border: none;
  transition: 0.3s;

  svg {
    margin-top: -7px;
    padding: 0;
  }

  p {
    margin-top: -10px;
    padding: 0;
    font-size: 18px;
  }

  &:active {
    background-color: #bdbd1f;
  }
`;