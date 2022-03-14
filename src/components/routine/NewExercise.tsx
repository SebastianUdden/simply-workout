import React, { useEffect } from "react";
import styled from "styled-components";
import { Close } from "../Close";
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
    const body = document.getElementsByTagName("body")[0];
    body.style.position = "fixed";
    body.style.left = "0";
    body.style.right = "0";
    document.getElementById("filter-exercises")?.focus();
    return () => {
      const body = document.getElementsByTagName("body")[0];
      body.style.position = "static";
      body.style.left = "default";
      body.style.right = "default";
    };
  }, []);
  return (
    <Wrapper>
      <Close onClick={() => onHideNewExercise()}>&times;</Close>
      <Content>
        <Label>Add exercise</Label>
        <SearchExercises
          exercises={allExercises}
          onSelect={handleAdd}
          maxHeight={true}
        />
        <br />
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
  background-color: #222;
  padding: 0 30px;
  z-index: 3;
`;
const Content = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-height: 100vh;
`;

export default NewExercise;
