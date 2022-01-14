import { useEffect, useState } from "react";
import styled from "styled-components";

import { workoutFormats } from "../constants/formats";
import { getOldWorkout } from "../utils";
import Routine from "./Routine";

const Home = () => {
  const [expandIndex, setExpandIndex] = useState(-1);
  const [formats, setFormats] = useState([]);
  const [routines, setRoutines] = useState<any[]>([]);

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    setRoutines(oldWorkout?.routines || []);
    setFormats(oldWorkout?.formats || workoutFormats);
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
