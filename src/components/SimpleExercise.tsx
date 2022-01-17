import React from "react";
import styled from "styled-components";
import { searchFor } from "../utils";
import { Button, Column, Item, Link, Row } from "./Common";

interface Props {
  exercise: any;
  onSelect?: Function;
  onDelete?: Function;
}

const SimpleExercise = ({ exercise, onSelect, onDelete }: Props) => {
  return (
    <Item onClick={(e) => onSelect && onSelect(e)}>
      <Row>
        <Column>
          <Name>{exercise.name}</Name>
        </Column>
        <Column>
          <Delete onClick={() => onDelete && onDelete(exercise.id)}>
            &times;
          </Delete>
        </Column>
      </Row>
      <Row>
        <Column>{exercise.category}</Column>
        <Column>
          <Row>
            <Link href={searchFor(exercise.name, "how to")} target="_blank">
              How to
            </Link>{" "}
            <Link href={searchFor(exercise.name, "muscles")} target="_blank">
              Muscles
            </Link>
          </Row>
        </Column>
      </Row>
    </Item>
  );
};

const Name = styled.strong`
  margin-top: 2px;
  font-size: 18px;
`;
const Delete = styled(Button)`
  margin-left: 5px;
`;

export default SimpleExercise;
