import { useEffect, useState } from "react";
import styled from "styled-components";
import { ROUTINES } from "../App";
import { workoutFormats } from "../constants/formats";
import { exerciseTypes as defaultExerciseTypes } from "../constants/exerciseTypes";
import {
  estimateTime,
  getFormatString,
  getNewDate,
  getOldWorkout,
  saveWorkout,
  uuidv4,
} from "../utils";
import { AddButton, DisplayName, Input, Label } from "../components/Common";
import { ExerciseProps } from "../components/routine/EditExercise";
import SearchExercises from "../components/SearchExercises";
import SimpleExercise from "../components/SimpleExercise";

interface Props {
  onTabChange: Function;
}

const AddRoutine = ({ onTabChange }: Props) => {
  const [showError, setShowError] = useState(false);
  const [routineName, setRoutineName] = useState("");
  const [routineColor, setRoutineColor] = useState("");
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
        id: uuidv4(),
        name: e.name,
        category: e.category,
        areas: e.areas,
        unit: e.unit,
        values: [...e.values, { date: getNewDate(), value: 10 }],
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
    onTabChange(ROUTINES);
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
    setExerciseTypes(oldWorkout.exercises || defaultExerciseTypes);
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
      <Label>Workout tag color</Label>
      <ColorInput
        color={routineColor}
        id="routine-color"
        placeholder="grey"
        type="color"
        value={routineColor}
        onChange={(e: any) => setRoutineColor(e.target.value)}
      />
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
              <Label>Add exercise</Label>
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
const ColorInput = styled(Input)<{ color?: string }>`
  background-color: ${(p) => p.color || "grey"};
  border: none;
  opacity: 1;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export default AddRoutine;
