import styled from "styled-components";
import { propColor } from "./propColor";

const floor = 90;
const seat = { y: 74, x: 50 };
const rightFoot = { y: floor, x: 70 };
const leftFoot = { y: floor, x: 53 };
const hip = { x: 60, y: 74 };
const weights = { y: 20, x: rightFoot.x + 10 };
export const overhang = { y: [weights.y - 15], x: [weights.x - 18] };

const Pulldown = () => {
  return (
    <>
      <Line
        id="weights"
        x1={weights.x}
        x2={weights.x}
        y1={floor}
        y2={weights.y}
      />
      <Line
        id="overhang"
        x1={weights.x}
        x2={overhang.x[0]}
        y1={weights.y}
        y2={overhang.y[0]}
      />
      <Line
        id="leg-support"
        x1={hip.x + 2}
        x2={hip.x + 2}
        y1={hip.y}
        y2={hip.y - 10}
      />
      <Line id="seat" x1={hip.x + 10} x2={seat.x} y1={hip.y} y2={seat.y} />
      <Circle id="leg-support-pads" y={hip.y - 14} x={hip.x} rx="1" />
      <ThinLine
        id="left-leg"
        x1={hip.x}
        x2={leftFoot.x}
        y1={hip.y}
        y2={leftFoot.y}
      />
      <ThinLine
        id="left-foot"
        x1={leftFoot.x - 2}
        x2={leftFoot.x + 2}
        y1={leftFoot.y}
        y2={leftFoot.y}
      />
      <ThinLine
        id="right-leg"
        x1={hip.x}
        x2={rightFoot.x}
        y1={hip.y}
        y2={rightFoot.y}
      />
      <Line
        id="right-foot"
        x1={rightFoot.x - 2}
        x2={rightFoot.x + 10}
        y1={rightFoot.y}
        y2={rightFoot.y}
      />
    </>
  );
};

const Line = styled.line`
  stroke: ${propColor};
`;
const Circle = styled.rect`
  fill: ${propColor};
  stroke: ${propColor};
  width: 5px;
  height: 5px;
  border-radius: 8px;
`;
const ThinLine = styled.line`
  stroke: ${propColor};
  stroke-width: 3.5;
`;
export default Pulldown;
