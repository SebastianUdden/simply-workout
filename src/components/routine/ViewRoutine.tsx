import { useState } from "react";
import styled from "styled-components";
import { RoutineProps } from "./Routine";
import ViewExercise from "./ViewExercise";

interface Props {
  routine: RoutineProps;
  i: number;
  formats: any[];
  onHideRoutine: Function;
  exerciseTypes: any[];
  onChangeValue: Function;
}

const ViewRoutine = ({
  routine,
  i,
  formats,
  onHideRoutine,
  onChangeValue,
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isLeft = selectedIndex === 0;
  const isRight = selectedIndex === routine.exercises.length - 1;

  const onGoForward = () => {
    if (isRight) return;
    setSelectedIndex(selectedIndex + 1);
  };
  const onGoBack = () => {
    if (isLeft) return;
    setSelectedIndex(selectedIndex - 1);
  };

  return (
    <Wrapper>
      <Button onClick={() => onHideRoutine()}>&times;</Button>
      <Title>{routine.name}</Title>
      <ViewExercise
        {...routine.exercises[selectedIndex]}
        format={routine.format}
        onChangeValue={(value: number) => onChangeValue(selectedIndex, value)}
      />
      <Arrows>
        <Arrow onClick={onGoBack} disabled={isLeft}>
          &larr;
        </Arrow>
        <Arrow onClick={onGoForward} disabled={isRight}>
          &rarr;
        </Arrow>
      </Arrows>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #222;
  padding: 30px;
`;
const Title = styled.h1`
  margin: 0 40px 20px 0;
  color: orange;
  opacity: 0.7;
`;
const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Arrow = styled.button<{ disabled?: boolean }>`
  padding: 20px;
  width: 47%;
  font-weight: 800;
  background-color: #333;
  border: none;
  font-size: 40px;
  color: white;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.2;
  }
  ${(p) =>
    p.disabled &&
    `
    opacity: 0.2;
    :hover, :active {
       opacity: 0.2;
    }
  `}
`;
const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background-color: inherit;
  border: none;
  font-size: 40px;
  color: white;
  cursor: pointer;
  z-index: 99;
  :hover {
    color: orange;
  }
`;

export default ViewRoutine;
