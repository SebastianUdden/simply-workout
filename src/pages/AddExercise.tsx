import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { exerciseNames, exerciseTypes } from "../constants/exerciseTypes";
import { getOldWorkout, saveWorkout, uuidv4 } from "../utils";
import { AddButton, Input, Row } from "../components/Common";
import SearchExercises from "../components/SearchExercises";
import SimpleExercise from "../components/SimpleExercise";

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

  const handleReset = () => {
    setExercises(exerciseTypes);
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
      <TopRow>
        <Label>Current exercises available</Label>
        <Reset onClick={handleReset}>Reset</Reset>
      </TopRow>
      <SearchExercises
        exercises={exercises}
        onSelect={(e: any) => setNewExercise(e)}
        onDelete={(id: string) => handleDelete(id)}
      />
      <Label>Select category</Label>
      {exerciseNames.map((name) => (
        <Radio
          key={name}
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
const Reset = styled.button`
  background-color: #000;
  color: #fff;
  padding: 5px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  :hover {
    background-color: #fff;
    color: #000;
  }
  :active {
    background-color: #ddd;
  }
`;
const TopRow = styled(Row)`
  margin: 20px 0 10px;
`;

export default AddExercise;
