import styled from "styled-components";

export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: inherit;
  color: inherit;
  border: none;
  font-size: 70px;
  line-height: 50px;
  z-index: 2;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
