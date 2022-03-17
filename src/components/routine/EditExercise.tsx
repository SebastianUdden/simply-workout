import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPercentageChange, searchFor } from "../../utils";
import { Link } from "../Common";

export interface ExerciseValue {
  date: string;
  value: number;
}
export interface ExerciseProps {
  id?: string;
  category?: string;
  name: string;
  unit: string;
  values: ExerciseValue[];
  format?: any;
  onChangeValue?: Function;
  onChangePosition?: Function;
  onDelete?: Function;
  i?: number;
  exerciseCount?: number;
  areas?: string[];
  bgColor?: string;
}

const checkValue = (value: number) => {
  return value >= 0 ? value : 0;
};

const EditExercise = ({
  id,
  category,
  name,
  unit,
  values,
  format,
  onChangeValue,
  onChangePosition,
  onDelete,
  i,
  exerciseCount,
  bgColor,
}: ExerciseProps) => {
  const [showInput, setShowInput] = useState(false);
  useEffect(() => {
    if (!showInput) return;
    document.getElementById(`${name}-input`)?.focus();
    // eslint-disable-next-line
  }, [showInput]);

  if (!values || values.length === 0) return null;
  const e = values[values.length - 1];

  const changeByPercentage = (percentage: number) => {
    onChangeValue &&
      onChangeValue(i, {
        ...e,
        value: getPercentageChange(e.value, percentage),
      });
    setShowInput(true);
    setTimeout(() => {
      setShowInput(false);
    }, 3000);
  };
  return (
    <Wrapper key={`${id}${Math.random()}`} bgColor={bgColor}>
      <Flex>
        <Label>{name}</Label>
        {onChangePosition && (
          <Box>
            <Arrow onClick={() => onChangePosition(i, -1)} disabled={i === 0}>
              &uarr;
            </Arrow>
            <Arrow
              onClick={() => onChangePosition(i, 1)}
              disabled={i === exerciseCount}
            >
              &darr;
            </Arrow>
            <Arrow
              style={{ backgroundColor: "red" }}
              onClick={() => onDelete && onDelete(i)}
            >
              &times;
            </Arrow>
          </Box>
        )}
      </Flex>
      <Flex>
        <Tag>{category}</Tag>
        <Box>
          <Link href={searchFor(name, "how to")} target="_blank">
            How to
          </Link>{" "}
          <Link href={searchFor(name, "muscles")} target="_blank">
            Muscles
          </Link>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Box>
            <Arrow onClick={() => changeByPercentage(format.percentage)}>
              +
            </Arrow>
            <Arrow onClick={() => changeByPercentage(-format.percentage)}>
              -
            </Arrow>
            <div>
              {showInput ? (
                <Input
                  id={`${name}-input`}
                  onBlur={() => setShowInput(false)}
                  value={e.value}
                  onChange={(e: any) =>
                    onChangeValue &&
                    onChangeValue(i, checkValue(e.target.value))
                  }
                />
              ) : (
                <FakeInput onClick={() => setShowInput(true)}>
                  {Math.round(e.value)}
                </FakeInput>
              )}
              <Span>{unit}</Span>
            </div>
          </Box>
        </Box>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.li<{ bgColor?: string }>`
  ${(p) => p.bgColor && `background-color: ${p.bgColor};`}
  border: 1px solid white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 6px;
`;
const Input = styled.input`
  text-align: right;
  width: 60px;
  margin: 0 5px;
  background-color: inherit;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  padding: 3px;
  font-size: 14px;
`;
const FakeInput = styled.span`
  display: inline-block;
  text-align: right;
  width: 60px;
  margin: 0 5px;
  background-color: inherit;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  padding: 3px;
`;
const Label = styled.label`
  display: block;
  color: orange;
  opacity: 0.7;
  font-weight: 800;
  text-transform: capitalize;
  font-size: 18px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
const Box = styled.div`
  display: flex;
`;
const Arrow = styled.button<{ color?: string; disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: #373737;
  border-radius: 6px;
  border: none;
  color: ${(p) => (p.color ? p.color : "inherit")};
  font-size: 18px;
  margin: 0 3px 0 0;
  opacity: 0.8;
  width: 30px;
  height: 30px;
  ${(p) =>
    p.disabled &&
    `
    opacity: 0.1;
    cursor: not-allowed;
  `}
`;
const Span = styled.span`
  margin-right: 5px;
`;
const Tag = styled.span`
  opacity: 0.3;
  text-transform: capitalize;
`;

export default EditExercise;
