import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPercentageChange } from "../../utils";
import { Column, Row } from "../Common";
import { ExerciseProps } from "./EditExercise";

const ViewExercise = ({
  category,
  name,
  format,
  unit,
  value,
  areas,
  onChangeValue,
}: ExerciseProps) => {
  const [simpleIndex, setSimpleIndex] = useState(-1);
  const challenge = Math.round(value * (1 + format.percentage / 100));
  const repString =
    unit === "kg" ? `${format.reps} reps` : `${challenge} ${unit}`;

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
      <Row>
        <Category>{category}</Category>
        <Reps>
          {format.sets} &times; {repString}
        </Reps>
      </Row>
      <Title>{name}</Title>
      {areas?.length ? (
        <Areas>
          {areas.map((a: string, i: number) => (
            <Area
              onClick={() => setSimpleIndex(i === simpleIndex ? -1 : i)}
              selected={i === simpleIndex}
            >
              {a[i === simpleIndex ? 1 : 0]}
            </Area>
          ))}
        </Areas>
      ) : (
        <br />
      )}
      <Row>
        <Column>
          <Label>Current</Label>
          <Value>
            {Math.round(value)} {unit}
          </Value>
        </Column>
        <Column>
          <Label>Challenge ({unit === "kg" ? "Rep" : "Set"})</Label>
          <Value big={true}>
            {challenge} {unit}
          </Value>
        </Column>
      </Row>
      <Row>
        <Button
          onClick={() =>
            onChangeValue &&
            onChangeValue(getPercentageChange(value, -format.percentage))
          }
        >
          Fail (-{format.percentage}%)
        </Button>
        <Button
          onClick={() =>
            onChangeValue &&
            onChangeValue(getPercentageChange(value, format.percentage))
          }
        >
          Success (+{format.percentage}%)
        </Button>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid #666;
  margin: 20px 0;
`;
const Category = styled.p`
  text-transform: capitalize;
  opacity: 0.5;
  margin: 5px 0;
`;
const Reps = styled.p`
  opacity: 0.5;
  margin: 5px 0;
`;
const Title = styled.h2`
  margin: 5px 0;
  text-transform: capitalize;
  font-size: 25px;
`;
const Areas = styled.p`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 30px;
`;
const Area = styled.button<{ selected?: boolean }>`
  background-color: #444;
  color: #fff;
  margin-top: 5px;
  margin-right: 5px;
  padding: 10px;
  text-transform: capitalize;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  font-size: 14px;
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
const Label = styled.span`
  opacity: 0.5;
  font-size: 14px;
`;
const Value = styled.span<{ big?: boolean }>`
  margin-left: 3px;
  font-size: 20px;
  ${(p) =>
    p.big &&
    `
    font-size: 35px;
  `}
`;
const Button = styled.button`
  user-select: none;
  margin-top: 10px;
  padding: 20px;
  width: 100%;
  font-size: 18px;
  font-weight: 800;
  background-color: #333;
  border: none;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  :last-child {
    margin-right: 0;
  }
  :hover {
    background-color: #666;
  }
  :active {
    opacity: 0.2;
  }
  ${(p) =>
    p.disabled &&
    `
    opacity: 0.2;
    :hover, :active {
       opacity: 0.2;
    }
  `}
`;

export default ViewExercise;