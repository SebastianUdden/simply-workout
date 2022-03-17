import styled from "styled-components";
import { propColor } from "./propColor";

const DipsBar = () => {
  const floor = 94;
  const leftFoot = { x: 35, y: floor };
  const rightFoot = { x: 70, y: floor };
  const barHeight = 56;
  return (
    <>
      <Line
        id="bar"
        x1={leftFoot.x - 5}
        x2={rightFoot.x + 5}
        y1={barHeight}
        y2={barHeight}
      />
      <Line
        id="left-stand"
        x1={leftFoot.x}
        x2={leftFoot.x}
        y1={floor}
        y2={barHeight}
      />
      <Line
        id="right-stand"
        x1={rightFoot.x}
        x2={rightFoot.x}
        y1={floor}
        y2={barHeight}
      />
    </>
  );
};

const Line = styled.line`
  stroke: ${propColor};
  stroke-width: 4;
`;

export default DipsBar;
