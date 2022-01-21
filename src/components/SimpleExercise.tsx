import { useState } from "react";
import styled from "styled-components";
import { searchFor } from "../utils";
import { Button, Column, Item, Link, Row } from "./Common";

interface Props {
  exercise: any;
  onSelect?: Function;
  onDelete?: Function;
  bgColor?: string;
}

const SimpleExercise = ({ exercise, onSelect, onDelete, bgColor }: Props) => {
  const [simpleIndex, setSimpleIndex] = useState(-1);

  return (
    <Item onClick={() => onSelect && onSelect(exercise)} bgColor={bgColor}>
      <Row>
        <Column>
          <Name>{exercise.name}</Name>
          <Category>{exercise.category}</Category>
        </Column>
        <Column>
          <FlexRow>
            {exercise?.areas?.map((a: string, i: number) => (
              <Area
                onClick={(e) => {
                  e.stopPropagation();
                  setSimpleIndex(i === simpleIndex ? -1 : i);
                }}
                selected={i === simpleIndex}
              >
                {a[i === simpleIndex ? 1 : 0]}
              </Area>
            ))}
          </FlexRow>
        </Column>
        <Column>
          <Delete onClick={() => onDelete && onDelete(exercise.id)}>
            &times;
          </Delete>
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
  text-transform: capitalize;
`;
const Category = styled.span`
  text-transform: capitalize;
  opacity: 0.7;
`;
const Delete = styled(Button)`
  margin-left: auto;
  width: 30px;
  margin-bottom: 15px;
  background-color: red;
`;
const Area = styled.button<{ selected?: boolean }>`
  background-color: #444;
  color: #fff;
  margin-top: 5px;
  margin-right: 5px;
  padding: 5px;
  text-transform: capitalize;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  font-size: 12px;
  :hover {
    background-color: #666;
  }
  ${(p) =>
    p.selected &&
    `
    background-color: #999;
    :hover {
      background-color: #bbb;
    }
  `}
`;
const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default SimpleExercise;
