import { useEffect, useState } from "react";
import styled from "styled-components";

import { workoutFormats } from "../constants/formats";
import { defaultRoutines } from "../constants/routines";
import { getOldWorkout, saveWorkout } from "../utils";
import { exerciseTypes } from "../constants/exerciseTypes";
import Routine, { RoutineProps } from "../components/routine/Routine";
import { Input } from "../components/Common";

const sortByName = (a: any, b: any) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

const Routines = () => {
  const [search, setSearch] = useState("");
  const [hide, setHide] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showExercises, setShowExercises] = useState(true);
  const [expandIndex, setExpandIndex] = useState(-1);
  const [formats, setFormats] = useState([]);
  const [routines, setRoutines] = useState<RoutineProps[]>([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    const newDefault = defaultRoutines.filter(
      (r: any) => !oldWorkout?.routines?.some((dr: any) => dr?.id === r.id)
    );
    const workouts = [...(oldWorkout?.routines || []), ...newDefault];

    setRoutines(workouts);
    setFormats(oldWorkout?.formats || workoutFormats);
    setExercises(
      oldWorkout.exercises?.length ? oldWorkout.exercises : exerciseTypes
    );
  }, []);

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    saveWorkout({ ...oldWorkout, routines, exercises });
  }, [routines, exercises]);
  const filteredRoutines = routines.filter(
    (r) =>
      r.name.toLowerCase().includes(search) ||
      r.exerciseIds
        .map((id) => exercises.find((e: any) => e.id === id))
        .some((e: any) => e.name.includes(search))
  );

  return (
    <Wrapper hide={hide}>
      <Row>
        <SearchInput
          placeholder="Search routines"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Toggle onClick={() => setShowExercises(!showExercises)}>
          {showExercises ? "Hide exercises" : "Show exercises"}
        </Toggle>
      </Row>
      {filteredRoutines?.length !== 0 && (
        <List>
          {filteredRoutines.sort(sortByName).map((r: any, i: number) => (
            <Routine
              key={r.id}
              routine={r}
              i={i}
              formats={formats}
              expandIndex={expandIndex}
              onExpandIndexChange={(i: number) => setExpandIndex(i)}
              exercises={exercises}
              onDeleteRoutine={(id: string) =>
                setRoutines(routines.filter((r) => r.id !== id))
              }
              onUpdateRoutine={(routine: any) => {
                setRoutines(
                  routines.map((r) => (r.id === routine.id ? routine : r))
                );
              }}
              onUpdateExercises={(updatedExercises: any) =>
                setExercises(updatedExercises)
              }
              showExercises={showExercises}
            />
          ))}
        </List>
      )}
      {filteredRoutines?.length === 0 && (
        <NoMatch>No routines matches your search...</NoMatch>
      )}
      <Button onClick={() => setShowDelete(!showDelete)} danger={!showDelete}>
        {showDelete ? "Cancel" : "Reset to default routines"}
      </Button>
      {showDelete && (
        <Button
          onClick={() => {
            setHide(true);
            setTimeout(() => {
              setShowDelete(!showDelete);
              setRoutines([]);
            }, 500);
            setTimeout(() => {
              setRoutines(defaultRoutines);
              setHide(false);
            }, 520);
          }}
          danger
        >
          Permanently remove saved routines
        </Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ hide: boolean }>`
  padding: 20px 0;
  opacity: 1;
  display: flex;
  flex-direction: column;
  transition: opacity 500ms ease;
  ${(p) =>
    p.hide &&
    `
    opacity: 0;
  `}
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const Button = styled.button<{ danger?: boolean }>`
  background-color: #333;
  margin-bottom: 10px;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  font-size: 20px;
  border-radius: 6px;
  cursor: pointer;
  ${(p) =>
    p.danger &&
    `
    background-color: #aa0000;
  `}
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.5;
  }
`;
const SearchInput = styled(Input)`
  border-radius: 6px;
  border: 1px solid #777;
  width: 60%;
  margin: 0;
`;
const NoMatch = styled.p`
  font-size: 16px;
  opacity: 0.5;
`;
const Row = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const Toggle = styled(Button)`
  width: 40%;
  margin: 0 0 0 10px;
  font-size: 16px;
  padding: 10px;
`;

export default Routines;
