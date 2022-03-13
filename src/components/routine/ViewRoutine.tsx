import { useEffect, useState } from "react";
import styled from "styled-components";
import { Close } from "../Close";
import { ExerciseValue } from "./EditExercise";
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
  const [show, setShow] = useState(false);
  const [showNewExercise, setShowNewExercise] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isLeft = selectedIndex === 0;
  const isRight = selectedIndex === routine.exercises.length - 1;

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onHideRoutine();
    }, 1000);
  };
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

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Wrapper show={show}>
      <Close onClick={handleClose}>&times;</Close>
      <Content>
        <Title>{routine.name}</Title>
        <ViewExercise
          {...routine.exercises[selectedIndex]}
          format={routine.format}
          onChangeValue={(value: ExerciseValue) =>
            onChangeValue(selectedIndex, value)
          }
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

const Wrapper = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #222;
  color: #fff;
  padding: 30px 15px 0;
  z-index: 1;
  transition: transform 700ms ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  ${(p) =>
    p.show ? "transform: translateX(0);" : "transform: translateX(100%);"}
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
  padding: 17px 15px;
  font-size: 18px;
  width: 100%;
  font-weight: 800;
  background-color: #333;
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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

export default ViewRoutine;
