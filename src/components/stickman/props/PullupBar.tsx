import styled from "styled-components";
import { propColor } from "./propColor";

const PullupsBar = () => {
  const floor = 94;
  const leftFoot = { x: 65, y: floor };
  const rightFoot = { x: 80, y: floor };
  const barHeight = 8;
  return (
    <>
      <Line
        id="bar"
        x1={leftFoot.x - 14}
        x2={rightFoot.x + 14}
        y1={barHeight}
        y2={barHeight}
      />
      <Line
        id="left-support"
        x1={leftFoot.x - 8}
        x2={leftFoot.x}
        y1={barHeight}
        y2={barHeight + 12}
      />
      <Line
        id="right-support"
        x1={rightFoot.x + 8}
        x2={rightFoot.x}
        y1={barHeight}
        y2={barHeight + 12}
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
      <Line
        id="foot"
        x1={leftFoot.x - 5}
        x2={rightFoot.x + 5}
        y1={floor}
        y2={floor}
      />
    </>
  );
};

const Line = styled.line`
  stroke: ${propColor};
  stroke-width: 4;
`;

export default PullupsBar;
