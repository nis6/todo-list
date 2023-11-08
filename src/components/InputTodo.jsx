import React, { useState } from "react";
import styled from "styled-components";
import { MdRadioButtonUnchecked } from "react-icons/md";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  border: solid 1px #ccc;
  border-radius: 0.5rem;
  padding: 5px 12px;
  width: 40vw;
  height: 60px;
  z-index: 1;
  position: relative;
  background-color: white;
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

const RadioIcon = styled(MdRadioButtonUnchecked)`
  color: #ccc;
  font-size: 1.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  font-size: 1.1rem;
  outline: none;
  font-weight: 300;
`;

const InputTodo = ({ onEnter }) => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      onEnter(text);
      setText("");
    }
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
