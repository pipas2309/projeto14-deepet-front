import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  h1 {
    margin-top: 24px;
    margin-bottom: 8px;
    font-size: 16px;
  }
  .payment{
    width:89px;
    height:30px;
    border:1px solid lightgray;
    border-radius:3px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    margin:auto;
  }
`;

export const Resume = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  h2 {
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    color: rgb(108, 108, 108);
    margin: 0px 0px 11px 32px;
  }
  section {
    color: rgb(135, 135, 135);
    background-color: rgb(250, 250, 250);
    display: flex;
    flex-flow: column nowrap;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    div {
      padding: 20px 33px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const FootFixed = styled.footer`
  width: 100%;
  height: 63px;
  position: fixed;
  right: 0px;
  bottom: 0px;
  display: flex;
  background: rgb(82, 177, 47);
  justify-content:center;
  align-items:center;
`;
