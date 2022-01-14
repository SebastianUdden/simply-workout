import styled from "styled-components";
import Exercise, { ExerciseProps } from "./Exercise";
import { Select } from "./Common";
import { Format } from "./AddFormat";
import { useEffect, useState } from "react";
import {
  estimateTime,
  getFormatString,
  getOldWorkout,
  saveWorkout,
  uuidv4,
} from "../utils";
import { bodyWeight } from "../constants/body-weight";
import { freeWeight } from "../constants/free-weight";
import { machine } from "../constants/machine";

interface RoutineProps {
  name: string;
  format: any;
  exercises: any[];
  timeToComplete?: string;
}

interface Props {
  routine: RoutineProps;
  i: number;
  formats: any[];
  expandIndex: number;
  onExpandIndexChange: Function;
}

const Routine = ({
  routine,
  i,
  formats,
  expandIndex,
  onExpandIndexChange,
}: Props) => {
  const [exerciseTypes, setExerciseTypes] = useState<any[]>([]);
  const [r, setR] = useState(routine);
  const { name, format, exercises, timeToComplete } = r;

  const handleChangeExerciseValue = (i: number, value: number) => {
    setR({
      ...r,
      exercises: r.exercises.map((e, index) =>
        i !== index ? e : { ...e, value }
      ),
    });
  };

  const handleChangeExercisePosition = (i: number, move: number) => {
    const moveExercise = r.exercises[i];
    const newExercises = r.exercises.slice();
    newExercises.splice(i, 1);
    newExercises.splice(i + move, 0, moveExercise);

    setR({ ...r, exercises: newExercises });
  };

  const handleDeleteExercise = (i: number) =>
    setR({
      ...r,
      exercises: r.exercises.filter((e, index) => i !== index),
    });

  const handleChangeFormat = (e: any) => {
    const newFormat = formats.find((f) => f.id === e.target.value);
    setR({
      ...r,
      format: newFormat,
      timeToComplete: estimateTime(newFormat, exercises),
    });
  };

  const handleAddType = (e: any) => {
    if (e.target.value === "Select option") return;
    const type = exerciseTypes.find((t) => t.id === e.target.value);
    e.target.value = "Add workout type";
    setR({
      ...r,
      exercises: [
        ...exercises,
        {
          id: uuidv4(),
          name: type.name,
          category: type.category,
          unit: "kg",
          value: 10,
        },
      ],
    });
  };

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    const newWorkout = {
      ...oldWorkout,
      routines: oldWorkout.routines.map((routine: any, index: number) =>
        index !== i ? routine : r
      ),
    };
    saveWorkout(newWorkout);
    // eslint-disable-next-line
  }, [r]);

  useEffect(() => {
    document.getElementById("routine-name")?.focus();
    const oldWorkout = getOldWorkout();
    const defaultTypes = [...bodyWeight, ...freeWeight, ...machine];
    setExerciseTypes(oldWorkout.exercises || defaultTypes);
  }, []);

  return (
    <Wrapper>
      <Title
        onClick={() =>
          expandIndex === i ? onExpandIndexChange(-1) : onExpandIndexChange(i)
        }
      >
        {name} {expandIndex === i ? <>&uarr;</> : <>&darr;</>}
      </Title>
      <Item>Time to complete: {timeToComplete}</Item>
      <Item>Exercises: {exercises.length}</Item>
      <Item>Percentage (+ / -): {format.percentage}%</Item>
      {expandIndex === i && (
        <>
          <Exercises>
            {exercises.map((e: ExerciseProps, i: number) => (
              <Exercise
                {...e}
                onChangeValue={handleChangeExerciseValue}
                onChangePosition={handleChangeExercisePosition}
                onDelete={handleDeleteExercise}
                i={i}
                exerciseCount={exercises.length - 1}
              />
            ))}
          </Exercises>
          <Select onChange={handleAddType} capitalize={true}>
            <option>Add workout type</option>
            {exerciseTypes.map((e) => (
              <option key={e.id} value={e.id}>
                {e.category} - {e.name}
              </option>
            ))}
          </Select>
          <Select onChange={handleChangeFormat}>
            <option>Change format</option>
            {formats.map((f: Format) => (
              <option value={f.id}>{getFormatString(f)}</option>
            ))}
          </Select>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.li`
  border: 1px solid #666;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 10px;
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
  margin: 0;
  margin-bottom: 5px;
  color: orange;
  font-size: 22px;
  :active {
    opacity: 0.5;
  }
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  opacity: 0.4;
  font-size: 14px;
  border-radius: 6px;
  margin-bottom: 5px;
`;
export default Routine;
