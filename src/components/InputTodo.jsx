import React, { useState } from "react";
import { InputContainer, RadioIcon, Input } from "./InputTodo.elements";

const InputTodo = (props) => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddTodo = () => {
    props.add_todo({
      id: Math.floor(Math.random() * 1000),
      text: text,
      done: false,
      active: false,
    });
    setText("");
  };

  return (
    <InputContainer>
      <RadioIcon />
      <Input
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={handleInputChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleAddTodo();
          }
        }}
      />
    </InputContainer>
  );
};

export default InputTodo;
