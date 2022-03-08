import { useEffect, useState } from "react";
import styled from "styled-components";
import { getNewDate, getPercentageChange } from "../../utils";
import { Column, Row } from "../Common";
import History from "../History";
import Timer from "../timer/Timer";
import { ExerciseProps } from "./EditExercise";

const getChallenge = (value: number, percentage: number) =>
  Math.round(value * (1 + percentage / 100));

const ViewExercise = ({
  category,
  name,
  format,
  unit,
  values,
  areas,
  onChangeValue,
}: ExerciseProps) => {
  const [simpleIndex, setSimpleIndex] = useState(-1);
  const [showTimer, setShowTimer] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showRepChallenge, setShowRepChallenge] = useState(false);
  const value = values[values.length - 1]?.value;
  const challenge = getChallenge(value, format.percentage);
  const repString =
    unit === "kg" ? `${format.reps} reps` : `${challenge} ${unit}`;

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.position = "fixed";
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";
    document.getElementById("filter-exercises")?.focus();
    return () => {
      const body = document.getElementsByTagName("body")[0];
      body.style.overflow = "auto";
      body.style.position = "static";
      body.style.left = "default";
      body.style.right = "default";
    };
  }, []);

  return (
    <Wrapper>
      {showHistory && (
        <History
          title={name}
          values={values}
          unit={unit}
          onClose={() => setShowHistory(false)}
        />
      )}
      {showTimer && (
        <Timer time={challenge} onClose={() => setShowTimer(false)} />
      )}
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
        <Column fixed>
          <Label>
            <span>Current</span>
            {values.length > 1 && (
              <>
                {" "}
                <TextButton onClick={() => setShowHistory(true)}>
                  Show history
                </TextButton>
              </>
            )}
          </Label>
          <Value>
            {Math.round(value)} {unit}
          </Value>
        </Column>
        <Column fixed>
          <Label>
            <span>
              Challenge (
              {unit === "kg"
                ? showRepChallenge
                  ? `${Math.round(value)} ${unit}`
                  : `${format.reps} reps`
                : "Set"}
              )
            </span>
          </Label>
          <TimerButton
            onClick={() =>
              unit === "sec"
                ? setShowTimer(true)
                : setShowRepChallenge(!showRepChallenge)
            }
          >
            <Value big>
              {showRepChallenge
                ? `${getChallenge(format.reps, format.percentage)} reps`
                : `${challenge} ${unit}`}
            </Value>
          </TimerButton>
        </Column>
      </Row>
      <Row>
        <Button
          onClick={() =>
            onChangeValue &&
            onChangeValue({
              date: getNewDate(),
              value: getPercentageChange(value, -format.percentage),
            })
          }
        >
          Fail (-{format.percentage}%)
        </Button>
        <Button
          onClick={() =>
            onChangeValue &&
            onChangeValue({
              date: getNewDate(),
              value: getPercentageChange(value, format.percentage),
            })
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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
const Label = styled.label`
  font-size: 14px;
  span {
    opacity: 0.5;
  }
`;
const Value = styled.span<{ big?: boolean }>`
  margin-left: 3px;
  font-size: 20px;
  ${(p) =>
    p.big &&
    `
    font-size: 28px;
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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :last-child {
    margin-right: 0;
  }
  :hover {
    background-color: #666;
    box-shadow: none;
  }
  :active {
    opacity: 0.2;
    box-shadow: none;
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
const TimerButton = styled(Button)`
  padding: 10px;
`;
const TextButton = styled(Area)`
  margin-top: -5px;
  background-color: #ff00ff;
  width: auto;
  font-size: 12px;
  padding: 5px;
`;

export default ViewExercise;
