import { useEffect, useState } from "react";
import styled from "styled-components";
import { bodyWeight, BODY_WEIGHT } from "../constants/body-weight";
import { freeWeight, FREE_WEIGHT } from "../constants/free-weight";
import { MACHINE, machine } from "../constants/machine";
import { getOldWorkout, saveWorkout, uuidv4 } from "../utils";
import { AddButton, DisplayName, Input, List } from "./Common";
import SimpleExercise from "./SimpleExercise";

interface RadioProps {
  onSelect: Function;
  exercise: any;
  constant: string;
}

const Radio = ({ onSelect, exercise, constant }: RadioProps) => (
  <RadioWrapper onClick={() => onSelect({ ...exercise, category: constant })}>
    <RadioButton type="radio" checked={exercise.category === constant} />
    <RadioLabel>{constant}</RadioLabel>
  </RadioWrapper>
);

const bySortString = (a: any, b: any) => {
  if (a.sortString > b.sortString) return 1;
  if (a.sortString < b.sortString) return -1;
  return 0;
};

const AddExercise = () => {
  const [exercises, setExercises] = useState<any[]>([]);
  const [newExercise, setNewExercise] = useState({
    id: 0,
    name: "",
    category: "",
  });

  const handleAdd = () => {
    const newExercises = [...exercises, { ...newExercise, id: uuidv4() }];
    setExercises(newExercises);
    setNewExercise({ ...newExercise, name: "" });
    const el = document.getElementById("exercise-name");
    if (!el) return;
    el.focus();
  };

  const handleDelete = (id: string) => {
    setExercises(exercises.filter((e) => e.id !== id));
  };

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    setExercises(
      oldWorkout.exercises?.length
        ? oldWorkout.exercises
        : [...bodyWeight, ...freeWeight, ...machine]
    );
  }, []);

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    const newWorkout = {
      ...oldWorkout,
      exercises,
    };
    saveWorkout(newWorkout);
  }, [exercises]);

  const alreadyExists = exercises.find(
    (w) => w.name === newExercise.name && w.category === newExercise.category
  )
    ? true
    : false;

  return (
    <Wrapper>
      {exercises.length !== 0 && (
        <>
          <Label>Current exercises available</Label>
          <List capitalize={true}>
            {exercises
              .map((e) => ({
                ...e,
                sortString: `${e.category} - ${e.name}`,
              }))
              .sort(bySortString)
              .map((e) => (
                <SimpleExercise
                  exercise={e}
                  onSelect={(e: any) => setNewExercise(e)}
                  onDelete={(id: string) => handleDelete(id)}
                />
              ))}
          </List>
        </>
      )}
      <Label>Select category</Label>
      <Radio
        onSelect={(e: any) => setNewExercise(e)}
        exercise={newExercise}
        constant={FREE_WEIGHT}
      />
      <Radio
        onSelect={(e: any) => setNewExercise(e)}
        exercise={newExercise}
        constant={BODY_WEIGHT}
      />
      <Radio
        onSelect={(e: any) => setNewExercise(e)}
        exercise={newExercise}
        constant={MACHINE}
      />
      <Label>Exercise name</Label>
      <Input
        id="exercise-name"
        value={newExercise.name}
        placeholder="My exercise"
        onChange={(e) =>
          setNewExercise({ ...newExercise, name: e.target.value })
        }
      />
      {(newExercise.category || newExercise.name) && (
        <DisplayName capitalize={true}>
          {newExercise.category} - {newExercise.name}
        </DisplayName>
      )}
      {newExercise.category && newExercise.name && (
        <AddButton onClick={handleAdd} disabled={alreadyExists}>
          {alreadyExists ? "Exercise already exists!" : "Add exercise"}
        </AddButton>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-weight: 800;
  margin: 20px 0 10px;
`;
const RadioButton = styled.input`
  cursor: pointer;
`;
const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  user-select: none;
  cursor: pointer;
  :hover {
    background-color: #111;
  }
  :active {
    background-color: #000;
  }
`;
const RadioLabel = styled.label`
  font-size: 15px;
  margin-left: 8px;
  opacity: 0.4;
  cursor: pointer;
  text-transform: capitalize;
`;

export default AddExercise;
