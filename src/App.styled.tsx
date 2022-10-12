import styled from "styled-components";

export const WrapperApp = styled.div`
  min-width: 1000px;
  margin 0 auto;
`;

export const WrapperButton = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  min-height: 36px;
  border-radius: 3px;
  font-size: 15px;
  font-family: Roboto 400;
  min-width: 75px;
  margin: 0 8px;
  transition: background-color 0.5s ease;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  color: #555555;
  &:hover {
    cursor: pointer;
    background-color: #ededed;
    color: black;
  }
`;
