import styled from "styled-components";

interface TileSizeContainerProps {
  containerWidth: string;
}

export const TileSizeContainer = styled.div<TileSizeContainerProps>`
  z-index: 2;
  position: fixed;
  flex-direction: column;
  display: flex;
  width: ${({ containerWidth }) => `${containerWidth}px`};
  max-height: 850px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #ffffff;
  border-radius: 20px;
  font-size: 18px;
  justify-content: center;
`;

export const TileSizeLabel = styled.label`
  display: flex;
  margin: 0;
  align-items: center;
`;
export const TileSizeRange = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto 0;
`;

export const TileSizeRangeName = styled.p`
  width: 100px;
  display: flex;
  justify-content: center;
`;

export const TileSizeRangeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto 0;
`;

interface TileSizeBoxProps {
  boxHeigth: string;
}

export const TileSizeBox = styled.div<TileSizeBoxProps>`
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-beetwen;
  width: 100%;
  height: ${({ boxHeigth }) => `${boxHeigth}px`};

  margin: 0 auto;
`;
export const TileSizeBackground = styled.div`
  z-index: 1;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #e5e5e5;
  opacity: 0.65;
`;

export const TileSizeInput = styled.input`
  min-width: 250px;
  margin: 0px 15px;
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
  padding: 20px;
  align-items: center;
  justify-content: center;
  color: #131313;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const TilePresentationBox = styled.div`
  width: 1020px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TileSizeHeader = styled.h1`
  margin: 20px auto 20px auto;
`;

export const TileAddButton = styled.button`
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
  margin: 20px 0px;
  padding: 10px 30px;
  text-shadow: 0px 1px 0px #ffffff;
  &:hover {
    background-color: #ffffff;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
