import styled from "styled-components";
import { propColor } from "./propColor";

interface Props {
  angle: number;
}

const Bench = ({ angle }: Props) => {
  let topY = 74;
  let diffX = 0;
  if (angle === 1) {
    topY = 40;
    diffX = -2;
  }
  if (angle === 0.7) {
    topY = 48;
    diffX = -10;
  }
  if (angle === 0.5) {
    topY = 52;
    diffX = -13;
  }
  if (angle === 0.3) {
    topY = 60;
    diffX = -10;
  }
  if (angle === -0.25) {
    topY = 82;
    diffX = +8;
  }
  const baseTopY = 74;
  const topYDiff = topY - baseTopY;
  const baseTopX = 27;
  const newTopX = baseTopX - topYDiff + diffX;
  const floor = 90;

  const top = { y: topY, x: newTopX };
  const bottom = { y: 74, x: 80 };
  const rightFoot = { y: floor, x: 78 };
  const leftFoot = { y: floor, x: 30 };
  const hip = { x: 60, y: 74 };

  const newSupportX = top.x + (hip.x - top.x) / 2;
  const newSupportY = top.y + (hip.y - top.y) / 2;
  const supportLow = { x: newSupportX - 10, y: newSupportY + 16 - diffX / 2 };
  const supportHigh = {
    x: newSupportX,
    y: newSupportY,
  };

  return (
    <>
      <Line id="back" x1={top.x} x2={hip.x} y1={top.y} y2={hip.y} />
      <Line id="seat" x1={hip.x} x2={bottom.x} y1={hip.y} y2={bottom.y} />
      <ThinLine
        id="support"
        x1={supportLow.x}
        x2={supportHigh.x}
        y1={supportLow.y}
        y2={supportHigh.y}
      />
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
  stroke-width: 3.5;
`;

export default Bench;
