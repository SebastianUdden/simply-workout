import { useEffect, useState } from "react";
import styled from "styled-components";

export interface ExerciseProps {
  id?: string;
  category?: string;
  name: string;
  unit: string;
  value: number;
  onChangeValue?: Function;
  onChangePosition?: Function;
  onDelete?: Function;
  i?: number;
  exerciseCount?: number;
}

const checkValue = (value: number) => {
  return value >= 0 ? value : 0;
};

const Exercise = ({
  category,
  name,
  unit,
  value,
  onChangeValue,
  onChangePosition,
  onDelete,
  i,
  exerciseCount,
}: ExerciseProps) => {
  const [showInput, setShowInput] = useState(false);

  const changeByPercentage = (percentage: number) => {
    onChangeValue &&
      onChangeValue(
        i,
        Math.round(1000 * value * (1 + percentage / 100)) / 1000
      );
    setShowInput(true);
    setTimeout(() => {
      setShowInput(false);
    }, 3000);
  };

  useEffect(() => {
    if (!showInput) return;
    document.getElementById(`${name}-input`)?.focus();
    // eslint-disable-next-line
  }, [showInput]);

  return (
    <Wrapper>
      <Flex>
        <Label>{name}</Label>
        <Tag>{category}</Tag>
      </Flex>
      <Flex>
        <Box>
          <Box>
            <Arrow onClick={() => changeByPercentage(1)}>+</Arrow>
            <Arrow onClick={() => changeByPercentage(-1)}>-</Arrow>
            {showInput ? (
              <Input
                id={`${name}-input`}
                onBlur={() => setShowInput(false)}
                value={value}
                onChange={(e: any) =>
                  onChangeValue && onChangeValue(i, checkValue(e.target.value))
                }
              />
            ) : (
              <FakeInput onClick={() => setShowInput(true)}>
                {Math.round(value)}
              </FakeInput>
            )}
            <Span>{unit}</Span>
          </Box>
        </Box>
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
    </Wrapper>
  );
};

const Wrapper = styled.li`
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
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
const Box = styled.div``;
const Arrow = styled.button<{ color?: string; disabled?: boolean }>`
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

export default Exercise;
