import styled from "styled-components";
import { FORMAT, HOME, ROUTINE, EXERCISE } from "../App";

interface Props {
  onTabChange: Function;
}

const Header = ({ onTabChange }: Props) => {
  return (
    <Wrapper>
      <TitleButton onClick={() => onTabChange(HOME)}>Workout</TitleButton>
      <Right>
        <Button onClick={() => onTabChange(EXERCISE)}>+ Exercise</Button>
        <Button onClick={() => onTabChange(FORMAT)}>+ Format</Button>
        <Button onClick={() => onTabChange(ROUTINE)}>+ Routine</Button>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #050505;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const TitleButton = styled.button`
  margin: 0;
  font-size: 30px;
  background-color: inherit;
  color: inherit;
  border: none;
  border: 1px solid black;
  cursor: pointer;
  :hover {
    border: 1px solid white;
  }
  :active {
    border: 1px solid #888;
  }
`;
const Button = styled.button`
  font-size: 20px;
  background-color: inherit;
  color: inherit;
  border: none;
  border: 1px solid black;
  margin-left: 10px;
  cursor: pointer;
  :hover {
    border: 1px solid white;
  }
  :active {
    border: 1px solid #888;
  }
`;
const Right = styled.div``;

export default Header;
