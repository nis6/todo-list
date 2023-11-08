import React from "react";
import { Assets } from "../assets";
import InputTodo from "../components/InputTodo";
import TodoList from "../components/TodoList";
import { MainContainer, H1, HeaderImage } from "./Home.elements";

class Home extends React.Component {
  state = { todos: [] };

  //To set up the localStorage, immediately after first mount, if it doesn't exists already
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

  // Method to change the complete status
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

  // Method to toggle the active state
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
