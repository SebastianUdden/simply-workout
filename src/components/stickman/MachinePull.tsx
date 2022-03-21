import styled from "styled-components";
import Ani from "./Animation";
import { PositionArray } from "./Stickman";

const Bar = styled.line`
  stroke: #000;
  stroke-width: 4;
`;
const Line = styled.line`
  stroke: #777;
  stroke-width: 1;
`;

interface MachineBarProps {
  rightHand: PositionArray;
  leftHand: PositionArray;
  d: number;
}
export const MachineBar = ({ rightHand, leftHand, d }: MachineBarProps) => (
  <Bar
    x1={rightHand.x[0]}
    y1={rightHand.y[0]}
    x2={leftHand.x[0]}
    y2={leftHand.y[0]}
  >
    <Ani arr={rightHand.x} attr="x1" dur={d} />
    <Ani arr={rightHand.y} attr="y1" dur={d} />
    <Ani arr={leftHand.x} attr="x2" dur={d} />
    <Ani arr={leftHand.y} attr="y2" dur={d} />
  </Bar>
);

interface MachineLineProps {
  hand: PositionArray;
  anchor: PositionArray;
  d: number;
}
export const MachineLine = ({ hand, anchor, d }: MachineLineProps) => (
  <Line x1={hand.x[0]} y1={hand.y[0]} x2={anchor.x[0]} y2={anchor.y[0]}>
    <Ani arr={hand.x} attr="x1" dur={d} />
    <Ani arr={hand.y} attr="y1" dur={d} />
  </Line>
);

// const suspensionLineL = (
//   <Line
//     x1={leftHand.x[0]}
//     y1={leftHand.y[0]}
//     x2={suspension.x1}
//     y2={suspension.y}
//   >
//     <Ani arr={leftHand.x} attr="x1" dur={d} />
//     <Ani arr={leftHand.y} attr="y1" dur={d} />
//   </Line>
// );
// const suspensionLineR = (
//   <Line
//     x1={rightHand.x[0]}
//     y1={rightHand.y[0]}
//     x2={suspension.x2}
//     y2={suspension.y}
//   >
//     <Ani arr={rightHand.x} attr="x1" dur={d} />
//     <Ani arr={rightHand.y} attr="y1" dur={d} />
//   </Line>
// );
