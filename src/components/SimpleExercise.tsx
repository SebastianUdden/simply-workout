import { useState } from "react";
import styled from "styled-components";
import { searchFor } from "../utils";
import { Item, Link as LinkUI, Row } from "./Common";
import { getAnimation } from "./stickman/animations";
import { getDirection } from "./stickman/direction";
import StickmanWithProps from "./stickman/StickmanWithProps";

interface Props {
  exercise: any;
  onSelect?: Function;
  onDelete?: Function;
  bgColor?: string;
}

const SimpleExercise = ({ exercise, onSelect, bgColor }: Props) => {
  const [simpleIndex, setSimpleIndex] = useState(-1);
  const showImage = false;

  const animation = getAnimation(exercise.name);
  const direction = getDirection(exercise.name);

  return (
    <Item
      key={exercise.id}
      onClick={() => onSelect && onSelect(exercise)}
      bgColor={bgColor}
    >
      {showImage && <Image src={exercise.img} />}
      <Row>
        <Column>
          <FlexRow>
            <Name>{exercise.name}</Name>
          </FlexRow>
          <FlexRow>
            <Category>{exercise.category}</Category>{" "}
          </FlexRow>
          <FlexRow>
            <Link href={searchFor(exercise.name, "how to")} target="_blank">
              How to
            </Link>{" "}
            <Link href={searchFor(exercise.name, "muscles")} target="_blank">
              Muscles
            </Link>
          </FlexRow>
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
        <Column width="70%">
          <StickmanWithProps
            direction={direction}
            animationProps={animation}
            category={exercise.category}
          />
        </Column>
      </Row>
      {/* <Column>
        {onDelete && (
          <Delete onClick={() => onDelete && onDelete(exercise.id)}>
            &times;
          </Delete>
        )}
      </Column> */}
    </Item>
  );
};

const Image = styled.img`
  border-radius: 6px;
  margin: 5px 5px 5px 0;
  width: 50px;
  height: 50px;
  @media (min-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;

const Name = styled.strong`
  margin-top: 2px;
  margin-right: 10px;
  font-size: 18px;
  text-transform: capitalize;
`;
const Category = styled.span`
  text-transform: capitalize;
  opacity: 0.7;
  margin-right: auto;
`;
// const Delete = styled(Button)`
//   margin-left: auto;
//   width: 30px;
//   margin-bottom: 15px;
//   background-color: red;
// `;
export const Area = styled.button<{ selected?: boolean }>`
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
  margin-bottom: 3px;
`;
const Column = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
  ${(p) =>
    p.width &&
    `
    justify-content: center;
    width: ${p.width};
  `}
`;
const Link = styled(LinkUI)`
  margin: 2px 8px 2px 0;
`;

export default SimpleExercise;
