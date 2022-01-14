import styled from "styled-components";
import { Format } from "./AddFormat";

export const AddButton = styled.button<{ disabled?: boolean }>`
  margin-top: 20px;
  padding: 20px;
  background-color: #111;
  color: #fff;
  font-size: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #000;
  }
  :active {
  }
  ${(p) =>
    p.disabled &&
    `
    background-color: inherit;
    text-align: left;
    padding: 0;
    cursor: not-allowed;
    opacity: 0.4;
    :hover {
      background-color: inherit;
    }
  `}
`;

export const DisplayName = styled.p<{ capitalize?: boolean }>`
  background-color: #333;
  padding: 20px;
  margin: 20px 0 0;
  ${(p) =>
    p.capitalize &&
    `
      text-transform: capitalize;
  `}
`;

export const List = styled.ul<{ capitalize?: boolean }>`
  text-align: left;
  padding: 0;
  margin: 0;
  max-height: 25vh;
  overflow-y: scroll;
  ${(p) =>
    p.capitalize &&
    `
      text-transform: capitalize;
  `}
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  opacity: 0.4;
  font-size: 14px;
  border: 1px solid #666;
  padding: 5px;
  border-radius: 6px;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    color: #fff;
    opacity: 1;
  }
  :active {
    background-color: #000;
  }
`;

export const Row = styled.p`
  margin: 0;
`;

export const Column = styled.div``;

export const Input = styled.input`
  font-size: 15px;
  background-color: inherit;
  color: inherit;
  border: 1px solid white;
  padding: 15px;
`;

export const Select = styled.select<{ capitalize?: boolean }>`
  padding: 10px;
  font-size: 14px;
  background-color: inherit;
  color: inherit;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 10px;
  ${(p) =>
    p.capitalize &&
    `
      text-transform: capitalize;
  `}
`;

export const Button = styled.button`
  font-size: 25px;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 6px;
`;

export const Label = styled.label`
  font-weight: 800;
  margin: 20px 0 10px;
`;
