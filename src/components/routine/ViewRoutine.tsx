import { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal";
import { ExerciseProps, ExerciseValue } from "./EditExercise";
import NewExercise from "./NewExercise";
import { RoutineProps } from "./Routine";
import ViewExercise from "./ViewExercise";

interface Props {
  routine: RoutineProps;
  routineExercises: ExerciseProps[];
  onHideRoutine: Function;
  onChangeValue: Function;
  exercises: any[];
  onAdd: Function;
}

const ViewRoutine = ({
  exercises,
  routineExercises,
  routine,
  onHideRoutine,
  onChangeValue,
  onAdd,
}: Props) => {
  const [showNewExercise, setShowNewExercise] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isLeft = selectedIndex === 0;
  const isRight = selectedIndex === routine.exerciseIds.length - 1;

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
    <Modal key={routine.id} onClose={onHideRoutine} bgColor="#111">
      <Content>
        <Title>{routine.name}</Title>
        <ViewExercise
          {...routineExercises[selectedIndex]}
          format={routine.format}
          onChangeValue={(value: ExerciseValue) =>
            onChangeValue(routineExercises[selectedIndex].id, value)
          }
        />
        <Arrows>
          <Row>
            <Arrow onClick={onGoBack} disabled={isLeft}>
              &larr;
            </Arrow>
            {isRight && (
              <Plus onClick={() => setShowNewExercise(true)}>+ Add</Plus>
            )}
            <Arrow onClick={onGoForward} disabled={isRight}>
              &rarr;
            </Arrow>
          </Row>
        </Arrows>
      </Content>
      {showNewExercise && (
        <NewExercise
          onAdd={handleAdd}
          exercises={exercises}
          onHideNewExercise={() => setShowNewExercise(false)}
        />
      )}
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  max-height: 98vh;
  position: relative;
  overflow-y: scroll;
`;
const Title = styled.h1`
  margin: 5px 40px 0 0;
  color: orange;
  opacity: 0.7;
  font-size: 30px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
`;
const Arrows = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: inherit;
`;
const Plus = styled.button<{ disabled?: boolean }>`
  user-select: none;
  padding: 15px;
  font-size: 16px;
  width: 100%;
  font-weight: 800;
  background-color: #333;
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-right: 10px;
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
  font-size: 20px;
  :last-of-type {
    margin-right: 0;
  }
`;

export default ViewRoutine;
