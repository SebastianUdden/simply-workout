import styled from "styled-components";
import { HOME } from "../App";
import workoutLogo from "../images/workout-logo.png";

interface Props {
  tab: string;
  onTabChange: Function;
}

const Header = ({ onTabChange }: Props) => {
  return (
    <Wrapper>
      <TitleButton onClick={() => onTabChange(HOME)}>
        <Logo src={workoutLogo} />
        Workout
      </TitleButton>
      <Right>
        {/* <Button
          isSelected={tab === PROGRAMS}
          onClick={() => onTabChange(PROGRAMS)}
        >
          Programs
        </Button>
        <Button
          isSelected={tab === ROUTINES}
          onClick={() => onTabChange(ROUTINES)}
        >
          Routines
        </Button>
        <Button
          isSelected={tab === EXERCISES}
          onClick={() => onTabChange(EXERCISES)}
        >
          Exercises
        </Button>
        <Button
          isSelected={tab === EXERCISE}
          onClick={() => onTabChange(EXERCISE)}
        >
          + Exercise
        </Button>
        <Button isSelected={tab === FORMAT} onClick={() => onTabChange(FORMAT)}>
          + Format
        </Button>
        <Button
          isSelected={tab === ROUTINE}
          onClick={() => onTabChange(ROUTINE)}
        >
          + Routine
        </Button> */}
        {/* <Button onClick={() => onTabChange(TIPS)}>Tips</Button> */}
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #050505;
  padding: 20px;
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
  padding: 5px;
  /* :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.5;
  } */
`;
// const Button = styled.button<{ isSelected: boolean }>`
//   font-size: 20px;
//   background-color: inherit;
//   color: inherit;
//   border: none;
//   border: 1px solid black;
//   margin-left: 10px;
//   cursor: pointer;
//   ${(p) =>
//     p.isSelected &&
//     `
//     border-bottom: 1px solid white;
//   `}
//   :hover {
//     opacity: 0.8;
//   }
//   :active {
//     opacity: 0.5;
//   }
// `;
const Right = styled.div`
  margin-top: 15px;
`;
const Logo = styled.img`
  width: 40px;
  margin-right: -6px;
`;

export default Header;
