import styled from "styled-components";

export const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40vh;
  object-fit: cover;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  margin-top: 5rem;
  gap: 2rem;
`;

export const H1 = styled.h1`
  font-size: 32px;
  letter-spacing: 0.5rem;
  color: white;
  font-weight: 500;
  margin-left: -21rem;
`;
