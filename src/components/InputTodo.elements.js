import styled from "styled-components";
import { MdRadioButtonUnchecked } from "react-icons/md";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  border: solid 1px #ccc;
  border-radius: 0.5rem;
  padding: 5px 12px;
  width: 50vw;
  height: 60px;
  z-index: 1;
  position: relative;
  background-color: white;
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

export const RadioIcon = styled(MdRadioButtonUnchecked)`
  color: #ccc;
  font-size: 1.5rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  font-size: 1.1rem;
  font-weight: 400;
  outline: none;
  font-weight: 300;
`;
