import React, { useEffect } from "react";
import styled from "styled-components";
import { Label } from "../Common";
import SearchExercises from "../SearchExercises";

interface Props {
  onHideNewExercise: Function;
  allExercises: any[];
  onAdd: Function;
}

const NewExercise = ({ onHideNewExercise, allExercises, onAdd }: Props) => {
  const handleAdd = (e: any) => {
    onHideNewExercise();
    onAdd(e);
  };
  useEffect(() => {
    document.getElementById("filter-exercises")?.focus();
  }, []);
  return (
    <Wrapper>
      <Close onClick={() => onHideNewExercise()}>&times;</Close>
      <Content>
        <Label>Add exercise</Label>
        <SearchExercises
          exercises={allExercises}
          onSelect={handleAdd}
          maxHeight={false}
        />
      </Content>
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
const Content = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export default NewExercise;
