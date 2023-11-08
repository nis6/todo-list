import React from "react";
import styled from "styled-components";
import { Assets } from "../assets";
import InputTodo from "../components/InputTodo";
import TodoList from "../components/TodoList";
import { useState } from "react";

const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40vh;
  object-fit: cover;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  margin-top: 5rem;
  gap: 2rem;
`;

const H1 = styled.h1`
  font-size: 32px;
  letter-spacing: 0.5rem;
  color: white;
  font-weight: 500;
  margin-left: -21rem;
`;

export default function Home() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function removeTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }
  return (
    <div>
      <HeaderImage src={Assets.bitmap} alt="header" />
      <MainContainer>
        <H1>TODO</H1>
        <InputTodo onEnter={addTodo} />
        <TodoList todolist={todos} removeTodo={removeTodo} />
      </MainContainer>
    </div>
  );
}
