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
import { ExerciseProps } from "./routine/EditExercise";
import SearchExercises from "./SearchExercises";
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
    setExercises([
      ...exercises,
      {
        id: e.id || uuidv4(),
        name: e.name,
        category: e.category,
        areas: e.areas,
        unit: e.unit,
        value: 10,
      },
    ]);
  };

  const handleRemoveEntry = (id: string) => {
    // TODO: use index instead
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
              <SearchExercises
                exercises={exerciseTypes}
                onSelect={handleAddType}
              />
              {exercises.length > 0 && (
                <>
                  <Label>{routineName}</Label>
                  <Exercises>
                    {exercises.map((e: ExerciseProps, i: number) => (
                      <SimpleExercise
                        bgColor="#333"
                        exercise={e}
                        onDelete={(deleteId: string) =>
                          handleRemoveEntry(deleteId)
                        }
                      />
                    ))}
                  </Exercises>
                  <DisplayName>{getFormatString(format)}</DisplayName>
                  <InfoBox>
                    <FlexRow>
                      <Line>
                        <Span>Exercises:</Span>
                        {exercises.length}
                      </Line>
                      <Line>
                        <Span>Total reps:</Span>
                        {format.sets * format.reps * exercises.length}
                      </Line>
                      <Line>
                        <Span>Est. time:</Span>
                        {timeToComplete}
                      </Line>
                    </FlexRow>
                    <SmallExercises>
                      <Line>{exercises.map((e) => e.name).join(" --- ")}</Line>
                    </SmallExercises>
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
  overflow-y: scroll;
  text-transform: capitalize;
`;
const InfoBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid white;
  position: sticky;
  bottom: 2px;
  left: 0;
  right: 0;
  background-color: #000;
`;
const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SmallExercises = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-transform: capitalize;
  margin-top: 10px;
  font-size: 12px;
`;
const Line = styled.p`
  margin: 0 10px 0 0;
`;
const Span = styled.span`
  opacity: 0.4;
  margin-right: 8px;
`;
const Error = styled.p`
  color: red;
`;

export default AddRoutine;
