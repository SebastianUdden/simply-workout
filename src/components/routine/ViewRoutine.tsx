import { useState } from "react";
import styled from "styled-components";
import NewExercise from "./NewExercise";
import { RoutineProps } from "./Routine";
import ViewExercise from "./ViewExercise";

interface Props {
  routine: RoutineProps;
  i: number;
  formats: any[];
  onHideRoutine: Function;
  exerciseTypes: any[];
  onChangeValue: Function;
  exercises: any[];
  onAdd: Function;
}

const ViewRoutine = ({
  exercises,
  routine,
  i,
  formats,
  onHideRoutine,
  onChangeValue,
  onAdd,
}: Props) => {
  const [showNewExercise, setShowNewExercise] = useState(false);
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
  const handleAdd = (e: any) => {
    onAdd(e);
    setSelectedIndex(selectedIndex + 1);
  };

  return (
    <Wrapper>
      <Close onClick={() => onHideRoutine()}>&times;</Close>
      <Title>{routine.name}</Title>
      <ViewExercise
        {...routine.exercises[selectedIndex]}
        format={routine.format}
        onChangeValue={(value: number) => onChangeValue(selectedIndex, value)}
      />
      <Arrows>
        <Row>
          {isRight && (
            <Plus onClick={() => setShowNewExercise(true)}>+ Add exercise</Plus>
          )}
        </Row>
        <Row>
          <Arrow onClick={onGoBack} disabled={isLeft}>
            &larr;
          </Arrow>
          <Arrow onClick={onGoForward} disabled={isRight}>
            &rarr;
          </Arrow>
        </Row>
      </Arrows>
      {showNewExercise && (
        <NewExercise
          onAdd={handleAdd}
          exercises={exercises}
          onHideNewExercise={() => setShowNewExercise(false)}
        />
      )}
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
  z-index: 1;
`;
const Title = styled.h1`
  margin: 0 40px 20px 0;
  color: orange;
  opacity: 0.7;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
`;
const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
`;
const Plus = styled.button<{ disabled?: boolean }>`
  user-select: none;
  padding: 20px;

  width: 100%;
  font-weight: 800;
  background-color: #333;
  border: none;
  font-size: 40px;
  color: white;
  cursor: pointer;

  :hover {
    background-color: #666;
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
const Arrow = styled(Plus)`
  margin-top: 20px;
  :first-child {
    margin-right: 20px;
  }
`;
const Close = styled.button`
  user-select: none;
  position: absolute;
  top: 10px;
  right: 20px;
  background-color: inherit;
  border: none;
  font-size: 40px;
  color: white;
  cursor: pointer;
  z-index: 2;
  :hover {
    color: orange;
  }
`;

export default ViewRoutine;
