import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  .switch {
    width: 50px;
    height: 30px;
    background-color: rgba(120, 92, 92, 0.4);
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
    margin-left: 10px;
  }

  .handle {
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 40px;
    margin-bottom: 10px;
  }

  .switch[data-isOn="false"] {
    justify-content: flex-end;
  }
  svg {
    padding-right: 10px;
    width: 50px;
    height: 20px;
    margin: 15px 0px;
  }
  &:focus {
    img {
      visibility: hidden;
    }
  }
`;

export const HeaderBox = styled.div`
  width: 100%;
  height: 48px;
  background-color: #fff159;
  .logo {
    width: 40px;
    height: auto;
    margin: 0 5px;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    opacity: 1;
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    color: rgb(255, 255, 255);
    transition: visibility 0s ease 0s, opacity 0.3s linear 0s;
  }
`;

export const SearchForm = styled.form`
  height: 32px;
  transition: 0.3s;
  width: 47%;
  margin: 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 7px 0px 7px rgba(0, 0, 0, 0.04);
  transition: all 0.2s;

  input {
    color: #333;
    border: none;
    width: 100%;
    font-size: 16px;
    margin: 0 -10px;

    &:focus-within {
      height: 35px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100%;
    border: none;
    background-color: #ffffff;
    svg {
      width: 30px;
      height: 30px;
      color: gray;
    }
    :nth-child(3) {
      visibility: hidden;
    }
    
  }  
  &:focus-within {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 48px;
    transition: 0.2s;
    button {
      visibility: visible;
    }
  }
`;

export const SideBar = styled.aside`
  position: fixed;
  z-index: 3;
  top: 0;
  right: ${(props) => props.right};
  background: rgb(244, 244, 244);
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 150ms linear;
  overflow-y: scroll;
`;

export const SideBarHeader = styled.div`
  width: 100%;
  height:130px;
  line-height: 14px;
  font-weight: 400;
  text-decoration: none;
  background-color: #fff159;
  color: rgb(255, 255, 255);
  padding:12px 16px;
  border-bottom: solid 1px #e6e6e6;
  display: block;
  color: #333;
  .enterButton{
    background: #3484fa;
    color: #fff;
    margin-right: 12px;
    width: 40%;
    line-height: 1;
    padding: 12px 0;
    text-align: center;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid #3484fa;
    cursor: pointer;
    box-shadow: 0 0 0 0 #fff;
    text-decoration: none;
    display: inline-block;
  }
  .registerButton{
    background: #fff;
    color: #3484fa;
    width: 44%;
    line-height: 1;
    padding: 12px 0;
    text-align: center;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid #3484fa;
    cursor: pointer;
    box-shadow: 0 0 0 0 #fff;
    text-decoration: none;
    display: inline-block;
  }
  .buttonBox{
    margin-top:14px;
    border-collapse: collapse;
    max-height:40px;
    display:block;
    justify-content:space-between;
  }
`;

export const Theme = styled.p`
  width: 36px;
  margin-left: 5px;
  color: ${props => props.inputColor ? "#fff" : "#000"};
  
`;