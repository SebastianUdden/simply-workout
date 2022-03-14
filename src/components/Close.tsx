import styled from "styled-components";

export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: inherit;
  color: inherit;
  border: none;
  font-size: 40px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  width: 50px;
  height: 50px;
  line-height: 60px;
  :hover {
    opacity: 0.7;
  }
`;
