import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #eae7e7;
  padding: 5px 12px;
  width: 50vw;
  height: 60px;
  transition: background-color 0.3s ease;
  color: #525151;
  &:hover {
    background-color: #f2f1f1;
    cursor: grab;
  }
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

export const CustomCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin: 0.4rem;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  appearance: none;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: solid 1px #ccc;
  }
  &:after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 16px;
    display: none;
  }
  &:checked:after {
    display: block;
  }

  &:checked:before {
    background: linear-gradient(45deg, #ff69b4, #87cefa);
  }
`;

export const RowBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DeleteButton = styled(AiOutlineClose)`
  position: relative;
  z-index: 5;
  color: #646262;
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  border: none;
  cursor: pointer;
  font-size: 24px;
  background-color: transparent;
  border-radius: 50%;
  &:hover {
    background-color: #ccc;
  }
  &:active {
    background-color: #dcdbdb;
  }
`;
