import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 80px;
  .title {
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    color: #454545;
    margin-bottom: 14px;
  }
  .star-ratings {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const Price = styled.div`
  font-size: 26px;
  line-height: 18px;
  color: #007dc5;
  margin: 0 10px 2px 0;
  font-weight: bold;
`;

export const Shipping = styled.div`
  color: #00a650;
  font-size: 16px;
  line-height: 1.3;
  margin-bottom: 2px;
  margin-top:20px;
  svg {
    height: 20px;
    width: 20px;
  }
`;

export const Description = styled.div`
font-size: 14px;
width:100%;
line-height: 18px;
letter-spacing: 0;
margin-top: 10px;
`;