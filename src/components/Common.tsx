import styled from "styled-components";

export const AddButton = styled.button<{ disabled?: boolean }>`
  margin-top: 15px;
  padding: 20px;
  background-color: #000;
  color: #fff;
  font-size: 30px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #fff;
    color: #000;
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

export const List = styled.ul<{ capitalize?: boolean; noMaxHeight?: boolean }>`
  text-align: left;
  padding: 0;
  margin: 0;
  max-height: 100%;
  overflow-y: scroll;
  ${(p) =>
    p.noMaxHeight &&
    `
    max-height: 100%;
  `}
  ${(p) =>
    p.capitalize &&
    `
      text-transform: capitalize;
  `}
  li {
    :hover {
      background-color: #333;
    }
  }
`;

export const Item = styled.li<{ bgColor?: string }>`
  margin: 0;
  background-color: #111;
  list-style-type: none;
  font-size: 14px;
  border: none;
  padding: 5px 10px 8px;
  border-radius: 6px;
  margin-bottom: 10px;
  cursor: pointer;
  ${(p) => p.bgColor && `background-color: ${p.bgColor};`}
  :hover {
    color: #fff;
  }
  :active {
    background-color: #000;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Column = styled.div<{ fixed?: boolean }>`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  ${(p) =>
    p.fixed &&
    `
    margin-right: 10px;
    width: 50%;
    min-height: 80px;
    :last-child {
      margin-right: 0;
    }
  `}
`;

export const Input = styled.input`
  margin: 0 0 10px;
  font-size: 15px;
  background-color: inherit;
  color: inherit;
  border: 1px solid white;
  padding: 15px;
  border-radius: 6px;
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
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const Label = styled.label`
  font-weight: 800;
  margin: 20px 0 10px;
`;

export const Link = styled.a`
  color: orange;
  margin-right: 8px;
  white-space: nowrap;
  :hover {
    color: magenta;
  }
  :active {
    color: white;
  }
`;
