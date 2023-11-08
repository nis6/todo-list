import React, { useState } from "react";
import {
  TodoItemWrapper,
  RowBox,
  CustomCheckbox,
  IconButton,
  DeleteButton,
} from "./TodoItem.elements";
import { BsFlagFill } from "react-icons/bs";

const TodoItem = ({ todo, removeTodo, markDone, markActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log("todo.id: ", todo.id);
  return (
    <TodoItemWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <RowBox>
        <CustomCheckbox onChange={() => markDone(todo.id)} checked={todo.done} />
        <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
          {todo.text}
        </span>
      </RowBox>
      <RowBox>
        {todo.done ? (
          ""
        ) : todo.active ? (
          <IconButton
            onClick={() => {
              markActive(todo.id);
            }}
          >
            <BsFlagFill style={{ color: "green" }} />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              markActive(todo.id);
            }}
          >
            <BsFlagFill style={{ color: "red" }} />
          </IconButton>
        )}

        {isHovered ? (
          <IconButton onClick={() => removeTodo(todo.id)}>
            <DeleteButton />
          </IconButton>
        ) : (
          ""
        )}
      </RowBox>
    </TodoItemWrapper>
  );
};

export default TodoItem;
