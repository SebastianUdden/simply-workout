import React from "react";
import styled from "styled-components";
import { Label } from "../Common";
import SearchExercises from "../SearchExercises";

interface Props {
  onHideNewExercise: Function;
  exercises: any[];
  onAdd: Function;
}

const NewExercise = ({ onHideNewExercise, exercises, onAdd }: Props) => {
  const handleAdd = (e: any) => {
    onHideNewExercise();
    onAdd(e);
  };
  return (
    <Wrapper>
      <Close onClick={() => onHideNewExercise()}>&times;</Close>
      <Label>Add exercise</Label>
      <SearchExercises exercises={exercises} onSelect={handleAdd} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: inherit;
  padding: 30px;
  z-index: 3;
  display: flex;
  flex-direction: column;
`;
const Close = styled.button`
  user-select: none;
  position: absolute;
  top: 10px;
  right: 20px;
  background-color: inherit;
  border: none;
  font-size: 40px;
  color: white;
  cursor: pointer;
  z-index: 4;
  :hover {
    color: orange;
  }
`;
export default NewExercise;
