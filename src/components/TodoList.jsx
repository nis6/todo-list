import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoListContainer = styled.div`
  border-radius: 0.4rem;
  z-index: 1;
  position: relative;
  background-color: white;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
`;

const ToolBar = styled.div`
  display: flex;
  padding: 0.5rem 0.9rem;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const ButtonPrimary = styled.button`
  border: none;
  color: #828080;
  font-size: 0.9;
  font-weight: 500;
  background-color: transparent;
  &:focus {
    color: #3e3ef9;
  }
`;

const ButtonSecondary = styled.button`
  border: none;
  color: #828080;
  font-size: 0.9rem;
  background-color: transparent;
  &:active {
    color: #2b2a2a;
  }
`;

const RowBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

export default function TodoList({ todolist, removeTodo }) {
  return (
    <TodoListContainer>
      {todolist.map((todo, index) => (
        <TodoItem text={todo} removeTodo={removeTodo} key={index} index={index} />
      ))}
      <ToolBar>
        <ButtonSecondary>Count</ButtonSecondary>
        <RowBox>
          <ButtonPrimary>All</ButtonPrimary>
          <ButtonPrimary>Active</ButtonPrimary>
          <ButtonPrimary>Completed</ButtonPrimary>
        </RowBox>
        <ButtonSecondary>Clear Completed</ButtonSecondary>
      </ToolBar>
    </TodoListContainer>
  );
}
