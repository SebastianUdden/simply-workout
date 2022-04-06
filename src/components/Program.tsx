import styled from "styled-components";
import { capitalize, getExercisesFromIds } from "../utils";

const Program = ({
  onRoutineClick,
  showExercises,
  exercises,
  name,
  routines,
}: any) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <List>
        {routines.map((r: any) => {
          const routineExercises = getExercisesFromIds(
            exercises,
            r.routine.exerciseIds
          );
          return (
            <li>
              Day {r.day}:{" "}
              <Button onClick={() => onRoutineClick(r)}>
                {r.routine.name}
              </Button>
              {showExercises && (
                <Exercises>
                  {routineExercises.map((re: any) => (
                    <li>{capitalize(re[0].name)}</li>
                  ))}
                </Exercises>
              )}
            </li>
          );
        })}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  margin-bottom: 20px;
  padding: 5px 20px 20px;
  border-radius: 6px;
`;
const Title = styled.strong`
  font-size: 16px;
  color: orange;
`;
const List = styled.ul`
  font-size: 16px;
  margin: 0;
  padding: 5px 0 0 2px;
  list-style-type: none;

  li {
    margin-bottom: 3px;
  }
`;
const Button = styled.button`
  background-color: white;
  color: black;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  padding: 5px 10px;
  margin-bottom: 5px;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.5;
  }
`;
const Exercises = styled.ul`
  margin: 0 0 15px;
  padding: 0 0 0 25px;
  list-style-type: square;
  li {
    opacity: 0.5;
    /* :nth-child(even) {
      color: magenta;
    } */
  }
`;

export default Program;
