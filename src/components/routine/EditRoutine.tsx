import styled from "styled-components";
import EditExercise, { ExerciseProps } from "./EditExercise";
import { Button, Column, Row, Select } from "../Common";
import { Format } from "../../pages/AddFormat";
import { useEffect, useState } from "react";
import { capitalize, getFormatString } from "../../utils";
import { RoutineProps } from "./Routine";
import NewExercise from "./NewExercise";

interface Props {
  routine: RoutineProps;
  routineExercises: ExerciseProps[];
  i: number;
  formats: any[];
  expandIndex: number;
  onExpandIndexChange: Function;
  onViewRoutine: Function;
  exercises: ExerciseProps[];
  onChangeFormat: any;
  onChangeValue: Function;
  onChangePosition: Function;
  onDelete: Function;
  onAdd: any;
  onDeleteRoutine: Function;
  showExercises: boolean;
}

const EditRoutine = ({
  routine,
  routineExercises,
  i,
  formats,
  expandIndex,
  onExpandIndexChange,
  onViewRoutine,
  exercises,
  onChangeFormat,
  onChangeValue,
  onChangePosition,
  onDelete,
  onDeleteRoutine,
  onAdd,
  showExercises,
}: Props) => {
  const [showFullView, setShowFullView] = useState(false);
  const [maxHeight, setMaxHeight] = useState(105);
  const [showDelete, setShowDelete] = useState(false);
  const [showNewExercise, setShowNewExercise] = useState(false);
  const { name, format, exerciseIds, timeToComplete } = routine;

  const handleAdd = (e: any) => {
    setTimeout(() => {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
    onAdd(e);
  };
  const handleDelete = () => {
    if (showDelete === true) {
      setShowDelete(false);
      onDeleteRoutine(routine.id);
      return;
    }
    setShowDelete(true);
  };

  useEffect(() => {
    setShowFullView(expandIndex === i);
    setMaxHeight(routine.exerciseIds.length * 300 + 300);
  }, [routine, expandIndex, i]);

  return (
    <Wrapper key={routine.id} showFullView={showFullView} maxHeight={maxHeight}>
      <Row>
        <Title>
          <Circle color={routine.color} />
          {name}
        </Title>
        <Column>
          <Row>
            <SmallButton
              onClick={() =>
                expandIndex === i
                  ? onExpandIndexChange(-1)
                  : onExpandIndexChange(i)
              }
            >
              {expandIndex === i ? <>&uarr;</> : <>&darr;</>}
            </SmallButton>
            <SmallButton
              onClick={handleDelete}
              style={{ backgroundColor: "red" }}
            >
              {showDelete ? (
                <span style={{ fontSize: "12px" }}>Del</span>
              ) : (
                <>&times;</>
              )}
            </SmallButton>
          </Row>
        </Column>
      </Row>
      {expandIndex === i && (
        <>
          <Item>
            Do: {format.sets} sets * {format.reps} reps ={" "}
            {format.sets * format.reps} reps
          </Item>
          <Item>Rest between sets: {format.rest} sec</Item>
          <Item>Exercises: {exerciseIds.length}</Item>
          <Item>Percentage (+ / -): {format.percentage}%</Item>
        </>
      )}
      {expandIndex !== i && showExercises && (
        <>
          <Item>
            <Strong>Time to complete: {timeToComplete}</Strong>
          </Item>
          <UL>
            {routineExercises.map((e: any) => (
              <LI>{capitalize(e[0].name)}</LI>
            ))}
          </UL>
        </>
      )}
      <BigButton onClick={() => onViewRoutine()}>Start</BigButton>
      {expandIndex === i && (
        <>
          <Select onChange={onChangeFormat}>
            <option key="change format">Change format</option>
            {formats.map((f: Format) => (
              <option key={f.id} value={f.id}>
                {getFormatString(f)}
              </option>
            ))}
          </Select>

          <Exercises>
            {routineExercises.map((e: any, i: number) => (
              <EditExercise
                {...e[0]}
                format={routine.format}
                onChangeValue={onChangeValue}
                onChangePosition={onChangePosition}
                onDelete={onDelete}
                exerciseCount={exerciseIds.length - 1}
                i={i}
                bgColor="#111"
              />
            ))}
          </Exercises>
          <BigButton onClick={() => setShowNewExercise(true)}>
            Add exercise
          </BigButton>
          {showNewExercise && (
            <NewExercise
              onAdd={handleAdd}
              exercises={exercises}
              onHideNewExercise={() => setShowNewExercise(false)}
            />
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ showFullView: boolean; maxHeight: number }>`
  border: 1px solid #666;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 10px;
  /* max-height: 105px; */
  transition: max-height 500ms ease;
  overflow: hidden;
  ${(p) =>
    p.showFullView &&
    `
    max-height: ${p.maxHeight}px;
  `}
`;
const Exercises = styled.ul`
  margin: 10px 0;
  padding: 15px 40px;
  border-radius: 12px;
  font-size: 14px;
  list-style-type: none;
  padding: 0;
`;
const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0;
  margin-bottom: 5px;
  font-size: 22px;
  cursor: pointer;
  user-select: none;
  :hover {
    color: #fff;
  }
  :active {
    opacity: 0.5;
  }
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  font-size: 14px;
  border-radius: 6px;
  margin-bottom: 5px;
`;
const Strong = styled.strong`
  color: #666;
`;
export const BigButton = styled(Button)`
  margin: 5px 0;
  padding: 12px;
  font-size: 16px;
  width: 100%;
  :hover {
    color: #000;
    background-color: #fff;
  }
`;
const SmallButton = styled.button<{ color?: string; disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: #373737;
  border-radius: 6px;
  border: none;
  color: ${(p) => (p.color ? p.color : "inherit")};
  font-size: 18px;
  margin: 0 3px 0 0;
  opacity: 0.8;
  width: 30px;
  height: 30px;
  ${(p) =>
    p.disabled &&
    `
    opacity: 0.1;
    cursor: not-allowed;
  `}
`;
const Circle = styled.div<{ color?: string }>`
  margin-right: 6px;
  margin-top: 1px;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: ${(p) => p.color || "#666"};
`;

const UL = styled.ul`
  font-size: 12px;
  padding: 0 0 0 15px;
  opacity: 0.8;
`;
const LI = styled.li`
  list-style-type: disc;
`;

export default EditRoutine;
