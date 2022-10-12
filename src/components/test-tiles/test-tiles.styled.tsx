import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  margin: 20px auto;
  flex-direction: column;
  // height: 500px;
`;

export const TilesWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  margin: 10px;
  // border-radius: 20px;
`;

interface TileContentProps {
  isDragging: boolean;
}

export const TileContent = styled.div<TileContentProps>`
  display: flex;
  // border-radius: 20px;

  align-items: center;
  justify-content: center;
  color: #131313;
  background-color: ${({ isDragging }) => (isDragging ? "#909192" : "#ffffff")};
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 300ms ease-in-out;
  transform: ${({ isDragging }) =>
    isDragging ? "scale(1.06) rotate(3deg)" : null};
`;
