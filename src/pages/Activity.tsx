import { useEffect, useState } from "react";
import styled from "styled-components";
import WorkoutHistory from "../components/WorkoutHistory";
import { defaultRoutines } from "../constants/routines";
import { getOldWorkout } from "../utils";

const Activity = () => {
  const [routines, setRoutines] = useState<any>([]);
  useEffect(() => {
    const oldWorkout = getOldWorkout();
    const newDefault = defaultRoutines.filter(
      (r: any) => !oldWorkout?.routines?.some((dr: any) => dr?.id === r.id)
    );
    const workouts = [...(oldWorkout?.routines || []), ...newDefault];
    console.log({ workouts });
    setRoutines(workouts);
  }, []);
  return (
    <Wrapper>
      <br />
      <WorkoutHistory routines={routines} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Activity;
