import { useEffect, useState } from "react";
import styled from "styled-components";

import { workoutFormats } from "../constants/formats";
import { defaultRoutines } from "../constants/routines";
import { getOldWorkout } from "../utils";
import { exerciseTypes } from "../constants/exerciseTypes";
import Routine, { RoutineProps } from "./routine/Routine";

const Home = () => {
  const [expandIndex, setExpandIndex] = useState(-1);
  const [formats, setFormats] = useState([]);
  const [routines, setRoutines] = useState<RoutineProps[]>([]);
  const [allExercises, setAllExercies] = useState([]);

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    setRoutines(
      oldWorkout?.routines?.length ? [...oldWorkout?.routines] : defaultRoutines
    );
    setFormats(oldWorkout?.formats || workoutFormats);
    setAllExercies(
      oldWorkout.exercises?.length ? oldWorkout.exercises : exerciseTypes
    );
  }, []);

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

export default Home;
