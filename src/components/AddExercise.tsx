import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { exerciseNames, exerciseTypes } from "../constants/exerciseTypes";
import { getOldWorkout, saveWorkout, uuidv4 } from "../utils";
import { AddButton, Input } from "./Common";
import SearchExercises from "./SearchExercises";
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

const defaultExercise = {
  id: 0,
  name: "",
  category: "",
};

const AddExercise = () => {
  const firstTime = useRef<boolean>(false);
  const [exercises, setExercises] = useState<any[]>([]);
  const [newExercise, setNewExercise] = useState(defaultExercise);

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
      oldWorkout.exercises?.length ? oldWorkout.exercises : exerciseTypes
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

  useEffect(() => {
    if (!firstTime.current) {
      firstTime.current = true;
      return;
    }
    setTimeout(() => {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  }, [newExercise]);

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
          <SearchExercises
            exercises={exercises}
            onSelect={(e: any) => setNewExercise(e)}
            onDelete={(id: string) => handleDelete(id)}
          />
        </>
      )}
      <Label>Select category</Label>
      {exerciseNames.map((name) => (
        <Radio
          onSelect={(e: any) => setNewExercise(e)}
          exercise={newExercise}
          constant={name}
        />
      ))}
      <Label>Exercise name</Label>
      <Input
        id="exercise-name"
        value={newExercise.name}
        placeholder="My exercise"
        onChange={(e) =>
          setNewExercise({ ...newExercise, name: e.target.value })
        }
      />
      {newExercise.category && newExercise.name && (
        <SimpleExercise
          exercise={newExercise}
          onDelete={() => setNewExercise(defaultExercise)}
        />
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
