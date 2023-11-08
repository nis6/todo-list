import React from "react";
import styled from "styled-components";
import { Assets } from "../assets";
import InputTodo from "../components/InputTodo";
import TodoList from "../components/TodoList";

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

class Home extends React.Component {
  state = { todos: [] };

  componentDidMount() {
    var TodoList = JSON.parse(localStorage.getItem("todoList"));
    if (TodoList) {
      this.setState({ todos: TodoList });
    } else {
      localStorage.setItem("todoList", JSON.stringify(this.state.todos));
    }
  }

  addTodo = (todo) => {
    if (!todo || /^\s*$/.test(todo)) {
      return;
    }
    const newTodos = [todo, ...this.state.todos];
    localStorage.setItem("todoList", JSON.stringify(newTodos));
    this.setState({ todos: newTodos });
  };

  removeTodo = (index) => {
    const updatedTodos = [...this.state.todos].filter((todo) => todo.id !== index);
    localStorage.setItem("todoList", JSON.stringify(updatedTodos));
    this.setState({ todos: updatedTodos });
  };

  markDone = (index) => {
    const currentTodos = [...this.state.todos];
    const updatedTodos = currentTodos.map((todo, todo_index) => {
      if (todo.id !== index) return todo;
      else {
        currentTodos[todo_index].done = !currentTodos[todo_index].done;
        return currentTodos[todo_index];
      }
    });

    localStorage.setItem("todoList", JSON.stringify(updatedTodos));
    this.setState({ todos: updatedTodos });
  };

  markActive = (index) => {
    const currentTodos = [...this.state.todos];
    const updatedTodos = currentTodos.map((todo, todo_index) => {
      if (todo.id !== index) return todo;
      else {
        currentTodos[todo_index].active = !currentTodos[todo_index].active;
        return currentTodos[todo_index];
      }
    });

    localStorage.setItem("todoList", JSON.stringify(updatedTodos));
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div>
        <HeaderImage src={Assets.bitmap} alt="header" />
        <MainContainer>
          <H1>TODO</H1>
          <InputTodo add_todo={this.addTodo} />
          <TodoList
            todolist={this.state.todos}
            removeTodo={this.removeTodo}
            markDone={this.markDone}
            markPending={this.markPending}
            markActive={this.markActive}
          />
        </MainContainer>
      </div>
    );
  }
}

export default Home;
