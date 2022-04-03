import { useEffect, useState } from "react";
import styled from "styled-components";
import { Row } from "../components/Common";
import Program from "../components/Program";
import { ExerciseValue } from "../components/routine/EditExercise";
import ViewRoutine from "../components/routine/ViewRoutine";
import { exerciseTypes } from "../constants/exerciseTypes";
import { defaultPrograms } from "../constants/programs";
import { getOldWorkout, saveWorkout, updateExerciseValues } from "../utils";

const Programs = () => {
  const [viewRoutine, setViewRoutine] = useState<any>(false);
  const [programs, setPrograms] = useState([]);
  const [exercises, setExercises] = useState<any>([]);
  const [selectedRoutine, setSelectedRoutine] = useState<any>();

  const handleRoutineClick = (r: any) => {
    setSelectedRoutine(r.routine);
    setViewRoutine(true);
  };

  const handleChangeExerciseValue = (id: string, value: ExerciseValue) => {
    // setSelectedExercise(updateExerciseValues(selectedExercise, id, value));
    setExercises(exercises.map((e: any) => updateExerciseValues(e, id, value)));
  };

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    saveWorkout({
      ...oldWorkout,
      programs: programs?.length ? programs : oldWorkout.programs,
      exercises: exercises?.length ? exercises : oldWorkout.exercises,
    });
  }, [programs, exercises]);

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    setPrograms(
      oldWorkout.programs?.length ? oldWorkout.programs : defaultPrograms
    );
    setExercises(
      oldWorkout.exercises?.length ? oldWorkout.exercises : exerciseTypes
    );
  }, []);

  return (
    <Wrapper>
      <TopRow>
        <Label>Programs</Label>
      </TopRow>
      {programs.map((p) => (
        <Program {...p} onRoutineClick={handleRoutineClick} />
      ))}
      {viewRoutine && selectedRoutine && (
        <ViewRoutine
          routine={selectedRoutine}
          routineExercises={selectedRoutine.exerciseIds.map((eid: any) =>
            exercises.find(({ id }: any) => eid === id)
          )}
          exercises={exercises}
          onHideRoutine={() => setViewRoutine(false)}
          onChangeValue={handleChangeExerciseValue}
        />
      )}
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

export default Programs;
