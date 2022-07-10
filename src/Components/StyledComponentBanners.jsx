import styled from "styled-components";

export const Banner = styled.div`
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