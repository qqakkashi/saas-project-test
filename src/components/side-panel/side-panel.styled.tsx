import styled from "styled-components";

export const SidePanelContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

interface SidePannelPlusTile {
  width: number;
  height: number;
}

export const SidePannelPlusTile = styled.div`
  display: flex;

  font-size: 12px;
  width: 68px;
  height: 68px;
  margin: 20px auto;
  border: 1px solid black;
`;
