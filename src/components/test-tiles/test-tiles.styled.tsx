import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  margin: 20px auto;
  flex-direction: column;
`;

export const TilesWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  margin: 10px;
`;

interface TileContentProps {
  isDragging: boolean;
}

export const TileContent = styled.button<TileContentProps>`
  display: flex;
  border: 0;
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

// interface TileDeleteProps {
//   onSelect: boolean;
// }

export const TileDelete = styled.div`
  // display: none;
  position: absolute;
  width: 25px;
  top: 0;
  background-color: red;
  left: 0;
  height: 25px;
  border-radius: 15px;
`;
export const TileConfirm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 400px;
  height: 200px;
  top: 0;
  left: 0;
  background-color: #ffffff;
  align-items: center;
  z-index: 3;
`;
export const ConfirmButton = styled.button`
  width: 150px;
  height: 50px;
`;

export const TileConfirmWrapper = styled.div`
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
