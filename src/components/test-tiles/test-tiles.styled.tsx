import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  margin: 20px auto;
  flex-direction: column;
  position: relative;
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

export const TileDelete = styled.div`
  position: absolute;
  width: 25px;
  top: 0;
  left: 0;
  height: 25px;
  cursor: pointer;
`;
export const TileConfirm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  width: 400px;
  height: 200px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #ffffff;
  align-items: center;
  z-index: 3;
  border-radius: 20px;
  font-size: 18px;
`;
export const ConfirmButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #fffcff;
  background-color: #ededed;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #292929;
  font-size: 19px;
  font-weight: bold;
  padding: 7px 24px;
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
  background-color: #e5e5e5;
  opacity: 0.65;
`;
