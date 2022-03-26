import styled from "styled-components";
import { propColor } from "./propColor";

const SidewaysBench = () => {
  const floor = 90;
  const rightFoot = { x: 40, y: floor };
  const leftFoot = { x: 20, y: floor };
  const hip = { x: 30, y: 78 };

  return (
    <>
      <Line id="seat" x1={hip.x - 10} x2={hip.x + 10} y1={hip.y} y2={hip.y} />
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
      <ThinLine
        id="right-foot"
        x1={rightFoot.x - 2}
        x2={rightFoot.x + 2}
        y1={rightFoot.y}
        y2={rightFoot.y}
      />
    </>
  );
};

const Line = styled.line`
  stroke: ${propColor};
`;
const ThinLine = styled.line`
  stroke: ${propColor};
  stroke-width: 3;
`;

export default SidewaysBench;
