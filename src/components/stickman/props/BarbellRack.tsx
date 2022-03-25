import styled from "styled-components";
import { propColor } from "./propColor";

const BarbellRack = () => {
  const floor = 94;
  const leftFoot = { x: 40, y: floor };
  const rightFoot = { x: 63, y: floor };
  const barHeight = 77;
  const rackHeight = 17;
  return (
    <>
      <Line
        id="left-stand"
        x1={leftFoot.x}
        x2={leftFoot.x}
        y1={floor}
        y2={rackHeight}
      />
      <Line
        id="bar"
        x1={leftFoot.x}
        x2={rightFoot.x - 1}
        y1={barHeight}
        y2={barHeight}
      />
      <Thin
        id="hold"
        x1={rightFoot.x}
        x2={rightFoot.x}
        y1={barHeight}
        y2={barHeight - 5}
      />
      <Line
        id="foot"
        x1={leftFoot.x - 5}
        x2={rightFoot.x + 2}
        y1={floor}
        y2={floor}
      />
    </>
  );
};

const Line = styled.line`
  stroke: ${propColor};
  stroke-width: 4;
  stroke-linecap: square;
`;
const Thin = styled(Line)`
  stroke-width: 2;
`;

export default BarbellRack;
