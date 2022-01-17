import { useEffect, useState } from "react";
import styled from "styled-components";
import { HOME } from "../App";
import { bodyWeight } from "../constants/body-weight";
import { workoutFormats } from "../constants/formats";
import { freeWeight } from "../constants/free-weight";
import { machine } from "../constants/machine";
import {
  estimateTime,
  getFormatString,
  getOldWorkout,
  saveWorkout,
  uuidv4,
} from "../utils";
import { AddButton, DisplayName, Input, Label } from "./Common";
import { ExerciseProps } from "./Exercise";
import SimpleExercise from "./SimpleExercise";

interface Props {
  onTabChange: Function;
}

const AddRoutine = ({ onTabChange }: Props) => {
  const [showError, setShowError] = useState(false);
  const [routineName, setRoutineName] = useState("");
  const [format, setFormat] = useState<any>(undefined);
  const [exercises, setExercises] = useState<ExerciseProps[]>([]);
  const [exerciseTypes, setExerciseTypes] = useState<any[]>([]);

  const handleAddFormat = (e: any) => {
    if (e.target.value === "0") return;
    setFormat(workoutFormats.find((f) => f.id === e.target.value));
  };

  const handleAddType = (e: any) => {
    if (e.target.value === "Select option") return;
    const type = exerciseTypes.find((t) => t.id === e.target.value);
    setExercises([
      ...exercises,
      {
        id: type.id || uuidv4(),
        name: type.name,
        category: type.category,
        unit: "kg",
        value: 10,
      },
    ]);
  };

  const handleRemoveEntry = (id: string) => {
    setExercises(exercises.filter((e: ExerciseProps) => e.id !== id));
  };

  const timeToComplete = estimateTime(format, exercises);

  const handleAddRoutine = () => {
    const oldWorkout = getOldWorkout();
    const routine = {
      id: uuidv4(),
      name: routineName,
      format,
      exercises,
      timeToComplete,
    };
    const newWorkout = {
      ...oldWorkout,
      routines: [...(oldWorkout.routines || []), routine],
    };
    saveWorkout(newWorkout);
    onTabChange(HOME);
  };

  useEffect(() => {
    const oldWorkout = JSON.parse(
      localStorage.getItem("simply-workout") || "{}"
    );
    if (oldWorkout.routines?.find((r: any) => r.name === routineName)) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [routineName]);

  useEffect(() => {
    document.getElementById("routine-name")?.focus();
    const oldWorkout = getOldWorkout();
    const defaultTypes = [...bodyWeight, ...freeWeight, ...machine];
    setExerciseTypes(oldWorkout.exercises || defaultTypes);
  }, []);

  return (
    <Wrapper>
      <Label>Workout routine name</Label>
      <Input
        id="routine-name"
        placeholder="My workout"
        value={routineName}
        onChange={(e: any) => setRoutineName(e.target.value)}
      />
      {showError && <Error>Routine name already exists!</Error>}
      {routineName && (
        <>
          <Label>Add workout format</Label>
          <Select onChange={handleAddFormat}>
            <option value="0">Select format</option>
            {workoutFormats.map((f) => (
              <option value={f.id}>{getFormatString(f)}</option>
            ))}
          </Select>
          {format && (
            <>
              <Label>Add workout type</Label>
              <Select onChange={handleAddType} capitalize={true}>
                <option>Select type</option>
                {exerciseTypes.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.category} - {e.name}
                  </option>
                ))}
              </Select>
              {exercises.length > 0 && (
                <>
                  <Label>{routineName}</Label>
                  <Exercises>
                    {exercises.map((e: ExerciseProps, i: number) => (
                      <SimpleExercise
                        exercise={e}
                        onDelete={(deleteId: string) =>
                          handleRemoveEntry(deleteId)
                        }
                      />
                    ))}
                  </Exercises>
                  <DisplayName>{getFormatString(format)}</DisplayName>
                  <InfoBox>
                    <Line>
                      <Span>Workout exercises:</Span>
                      {exercises.length}
                    </Line>
                    <Line>
                      <Span>Total reps:</Span>
                      {format.sets * format.reps * exercises.length}
                    </Line>
                    <Line>
                      <Span>Estimated time:</Span>
                      {timeToComplete}
                    </Line>
                  </InfoBox>
                  {!showError && (
                    <AddButton onClick={() => handleAddRoutine()}>
                      Add workout series
                    </AddButton>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Select = styled.select<{ capitalize?: boolean }>`
  padding: 10px;
  font-size: 14px;
  background-color: inherit;
  color: inherit;
  ${(p) =>
    p.capitalize &&
    `
      text-transform: capitalize;
  `}
`;
const Exercises = styled.ul`
  text-align: left;
  padding: 0;
  margin: 0;
  max-height: 25vh;
  overflow-y: scroll;
  text-transform: capitalize;
`;
const Entry = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  list-style-type: none;
  opacity: 0.4;
  font-size: 14px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 1;
  }
`;
const InfoBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid white;
`;
const Line = styled.p`
  margin: 0;
`;
const Span = styled.span`
  opacity: 0.4;
  margin-right: 8px;
`;
const Error = styled.p`
  color: red;
`;

export default AddRoutine;
