import styled from "styled-components";
import { propColor } from "./propColor";

interface Props {
  angle: number;
}

const CurlBench = ({ angle }: Props) => {
  const floor = 90;
  const leftFoot = { x: 35, y: floor };
  const rightFoot = { x: 70, y: floor };
  const seat = { x: leftFoot.x, y: 74 };
  const midX = rightFoot.x - leftFoot.x / 2;
  const hip = { x: midX, y: 60 };
  return (
    <>
      <Line
        id="bottom"
        x1={leftFoot.x - 5}
        x2={rightFoot.x + 5}
        y1={floor}
        y2={floor}
      />
      <Line
        id="seat-stand"
        x1={leftFoot.x}
        x2={leftFoot.x}
        y1={floor}
        y2={seat.y}
      />
      <Line
        id="seat"
        x1={leftFoot.x - 5}
        x2={leftFoot.x + 5}
        y1={seat.y}
        y2={seat.y}
      />
      <Line id="mid-stand" x1={midX} x2={midX} y1={floor} y2={hip.y} />
      <Line id="right-stand" x1={rightFoot.x} x2={midX} y1={floor} y2={hip.y} />
      <Line
        id="arm-cushion"
        x1={hip.x - 5}
        x2={hip.x + 5}
        y1={hip.y - 3}
        y2={hip.y + 3}
      />
    </>
  );
};

const Line = styled.line`
  stroke: ${propColor};
`;

export default CurlBench;
