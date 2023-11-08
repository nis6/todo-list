import React, { useState } from "react";
import TodoItem from "./TodoItem";
import {
  TodoListContainer,
  ToolBar,
  ButtonSecondary,
  ButtonPrimary,
  RowBox,
} from "./TodoList.elements";

export default function TodoList({ todolist, removeTodo, markDone, markActive }) {
  const [showCount, setCountToggle] = useState(false);
  const [showAll, setAllToggle] = useState(true);
  const [showActive, setActiveToggle] = useState(false);
  const [showCompleted, setCompletedToggle] = useState(false);

  // Function to set the active filter and clear others
  const setFilter = (filter) => {
    if (filter === "all") {
      setAllToggle(true);
      setActiveToggle(false);
      setCompletedToggle(false);
    } else if (filter === "active") {
      setAllToggle(false);
      setActiveToggle(true);
      setCompletedToggle(false);
    } else if (filter === "completed") {
      setAllToggle(false);
      setActiveToggle(false);
      setCompletedToggle(true);
    }
  };

  // Filter the todos based on the visibility filter
  const filteredTodos = todolist.filter((todo) => {
    if (showAll) return true;
    if (showActive) return todo.active;
    if (showCompleted) return todo.done;
    return true;
  });

  const handleClear = () => {
    todolist.map((todo) => {
      if (todo.done === true) removeTodo(todo.id);
    });
  };

  return (
    <TodoListContainer>
      {filteredTodos.map((todo, index) => (
        <TodoItem
          todo={todo}
          removeTodo={removeTodo}
          key={todo.id}
          markDone={markDone}
          markActive={markActive}
        />
      ))}
      <ToolBar>
        <ButtonSecondary onClick={() => setCountToggle(!showCount)}>
          <RowBox> Count {showCount ? <p> : {todolist.length}</p> : ""}</RowBox>
        </ButtonSecondary>
        <RowBox>
          <ButtonPrimary onClick={() => setFilter("all")}>All</ButtonPrimary>
          <ButtonPrimary onClick={() => setFilter("active")}>Active</ButtonPrimary>
          <ButtonPrimary onClick={() => setFilter("completed")}>
            Completed
          </ButtonPrimary>
        </RowBox>
        <ButtonSecondary onClick={handleClear}>Clear Completed</ButtonSecondary>
      </ToolBar>
    </TodoListContainer>
  );
}
