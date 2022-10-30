import styled from "styled-components";

export const TileSizeContainer = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  max-width: 1000px;
  height: 400px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #ffffff;
  border-radius: 20px;
  font-size: 18px;
`;
export const TileSizeBackground = styled.div`
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #e5e5e5;
  opacity: 0.65;
`;

interface TilePresentationProps {
  tileWidht: string;
  tileHeigth: string;
}

export const TilePresentation = styled.div<TilePresentationProps>`
  width: ${({ tileWidht }) => `${tileWidht}px`};
  height: ${({ tileHeigth }) => `${tileHeigth}px`};
  z-index: 2;

  display: flex;
  border: 0;
  align-items: center;
  justify-content: center;
  color: #131313;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
