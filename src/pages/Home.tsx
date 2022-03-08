import { useEffect, useState } from "react";
import styled from "styled-components";

import { workoutFormats } from "../constants/formats";
import { defaultRoutines } from "../constants/routines";
import { getOldWorkout, saveWorkout } from "../utils";
import { exerciseTypes } from "../constants/exerciseTypes";
import Routine, { RoutineProps } from "../components/routine/Routine";

const Home = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [expandIndex, setExpandIndex] = useState(-1);
  const [formats, setFormats] = useState([]);
  const [routines, setRoutines] = useState<RoutineProps[]>([]);
  const [allExercises, setAllExercies] = useState([]);

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    const newDefault = defaultRoutines.filter(
      (r: any) => !oldWorkout?.routines?.some((dr: any) => dr?.id === r.id)
    );
    const workouts = [...(oldWorkout?.routines || []), ...newDefault];

    setRoutines(workouts);
    setFormats(oldWorkout?.formats || workoutFormats);
    setAllExercies(
      oldWorkout.exercises?.length ? oldWorkout.exercises : exerciseTypes
    );
  }, []);

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    saveWorkout({ ...oldWorkout, routines });
  }, [routines]);

  return (
    <Wrapper>
      {routines && (
        <Routines>
          {routines.map((r: any, i: number) => (
            <Routine
              routine={r}
              i={i}
              formats={formats}
              expandIndex={expandIndex}
              onExpandIndexChange={(i: number) => setExpandIndex(i)}
              allExercises={allExercises}
            />
          ))}
        </Routines>
      )}
      <Button onClick={() => setShowDelete(!showDelete)} danger={!showDelete}>
        {showDelete ? "Cancel" : "Reset to default routines"}
      </Button>
      {showDelete && (
        <Button onClick={() => setRoutines(defaultRoutines)} danger>
          Remove saved routines
        </Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 0;
`;
const Routines = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const Button = styled.button<{ danger: boolean }>`
  background-color: #333;
  margin-bottom: 10px;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  font-size: 20px;
  border-radius: 6px;
  ${(p) =>
    p.danger &&
    `
    background-color: #aa0000;
  `}
`;

export default Home;
