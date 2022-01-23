import { useState } from "react";
import styled from "styled-components";
import NewExercise from "./NewExercise";
import { RoutineProps } from "./Routine";
import ViewExercise from "./ViewExercise";

interface Props {
  routine: RoutineProps;
  onHideRoutine: Function;
  onChangeValue: Function;
  allExercises: any[];
  onAdd: Function;
}

const ViewRoutine = ({
  allExercises,
  routine,
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
      <Content>
        <Title>{routine.name}</Title>
        <ViewExercise
          {...routine.exercises[selectedIndex]}
          format={routine.format}
          onChangeValue={(value: number) => onChangeValue(selectedIndex, value)}
        />
        <Arrows>
          <Row>
            {isRight && (
              <Plus onClick={() => setShowNewExercise(true)}>
                + Add exercise
              </Plus>
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
      </Content>
      {showNewExercise && (
        <NewExercise
          onAdd={handleAdd}
          allExercises={allExercises}
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
  padding: 30px 30px 0;
  z-index: 1;
`;
const Content = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  max-height: 98vh;
  position: relative;
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
  background-color: inherit;
  bottom: 40px;
  left: 0;
  right: 0;
`;
const Plus = styled.button<{ disabled?: boolean }>`
  user-select: none;
  padding: 20px 15px;
  font-size: 18px;
  width: 100%;
  font-weight: 800;
  background-color: #333;
  border: none;
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
  font-size: 30px;
  padding: 15px;
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
