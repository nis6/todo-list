import styled from "styled-components";

export const TodoListContainer = styled.div`
  border-radius: 0.4rem;
  z-index: 1;
  position: relative;
  background-color: white;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ToolBar = styled.div`
  display: flex;
  padding: 0.5rem 0.9rem;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  height: 40px;
   @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

export const ButtonPrimary = styled.button`
  border: none;
  color: #828080;
  font-size: 0.9;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    color: #3e3ef9;
  }
`;

export const ButtonSecondary = styled.button`
  border: none;
  color: #828080;
  font-size: 0.9rem;
  background-color: transparent;
  cursor: pointer;
  &:active {
    color: #2b2a2a;
  }
`;

export const RowBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;
