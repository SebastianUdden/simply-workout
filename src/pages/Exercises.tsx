import { useEffect, useState } from "react";
import styled from "styled-components";
import { exerciseTypes } from "../constants/exerciseTypes";
import {
  getNewDate,
  getOldWorkout,
  saveWorkout,
  updateExerciseValues,
} from "../utils";
import { Row } from "../components/Common";
import ViewRoutine from "../components/routine/ViewRoutine";
import SearchExercises from "../components/SearchExercises";
import { workoutFormats } from "../constants/formats";
import { ExerciseValue } from "../components/routine/EditExercise";
import { estimateTime } from "../utils";

const def = {
  id: "999",
  name: "Exercise",
  color: "teal",
  format: workoutFormats[0],
  exerciseIds: [],
  workouts: [],
};

const Exercises = () => {
  const [viewExercise, setViewExercise] = useState<any>(false);
  const [selectedExercise, setSelectedExercise] = useState<any>();
  const [newRoutine, setNewRoutine] = useState<any>();
  const [exercises, setExercises] = useState<any[]>([]);

  const handleSelectExercise = (id: string) => {
    setViewExercise(true);
    const exercise = exercises.find((e) => e.id === id);
    setSelectedExercise(exercise);
    setNewRoutine({
      ...def,
      id: `${def.id}-${exercise.id}`,
      name: `${def.name} - ${exercise.name}`,
      exerciseIds: [id],
      timeToComplete: estimateTime(def.format, [selectedExercise]),
      workouts: [getNewDate()],
    });
  };

  const handleChangeExerciseValue = (id: string, value: ExerciseValue) => {
    setSelectedExercise(updateExerciseValues(selectedExercise, id, value));
    setExercises(exercises.map((e: any) => updateExerciseValues(e, id, value)));
  };

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    setExercises(
      oldWorkout.exercises?.length ? oldWorkout.exercises : exerciseTypes
    );
  }, []);

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    let routines = [];
    if (newRoutine) {
      const routineExists =
        oldWorkout.routines.findIndex((r: any) => r.id === newRoutine.id) !==
        -1;
      routines = routineExists
        ? oldWorkout.routines.map((r: any) =>
            r.id === newRoutine.id ? newRoutine : r
          )
        : [...oldWorkout.routines, newRoutine];
    }
    const newWorkout = {
      ...oldWorkout,
      routines: newRoutine ? routines : oldWorkout.routines,
      exercises,
    };
    saveWorkout(newWorkout);
    // eslint-disable-next-line
  }, [exercises]);

  return (
    <Wrapper>
      <TopRow>
        <Label>Exercises</Label>
      </TopRow>
      {viewExercise && (
        <ViewRoutine
          routine={newRoutine}
          routineExercises={[selectedExercise]}
          exercises={exercises}
          onHideRoutine={() => setViewExercise(false)}
          onChangeValue={handleChangeExerciseValue}
        />
      )}
      <SearchExercises exercises={exercises} onSelect={handleSelectExercise} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  #exercise-name {
    margin-bottom: 20px;
  }
`;
const Label = styled.label`
  font-weight: 800;
`;
const TopRow = styled(Row)`
  margin: 20px 0 10px;
`;

export default Exercises;
