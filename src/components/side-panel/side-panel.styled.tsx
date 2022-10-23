import styled from "styled-components";

export const SidePanelContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 350px;
`;

interface SidePannelPlusTile {
  width: number;
  height: number;
}

export const SidePannelPlusTile = styled.button`
  width: 68px;
  height: 68px;
  box-shadow: inset 0px 1px 0px 0px #fffcff;
  background-color: #ededed;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #292929;
  font-size: 19px;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  &:hover {
    background-color: #ffffff;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
