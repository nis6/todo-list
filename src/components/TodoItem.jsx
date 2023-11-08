import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #eae7e7;
  padding: 5px 12px;
  width: 40vw;
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

const CustomCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin: 0.4rem;
  margin-right: 1.2rem;
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

const RowBox = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteButton = styled(MdClose)`
  display: block;
  color: #646262;
  font-size: 24px;
  cursor: pointer;
  &:focus {
    cursor: pointer;
    font-size: 30px;
  }
  &:active {
    font-size: 30px;
  }
`;

const TodoItem = ({ text, removeTodo, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TodoItemWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <RowBox>
        <CustomCheckbox />
        <span>{text}</span>
      </RowBox>

      {isHovered ? <DeleteButton onClick={() => removeTodo(index)} /> : ""}
    </TodoItemWrapper>
  );
};

export default TodoItem;
