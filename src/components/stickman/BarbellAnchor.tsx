import styled from "styled-components";
import Ani from "./Animation";
import { PositionArray } from "./Stickman";

const Bar = styled.line`
  stroke: #000;
  stroke-width: 4;
`;
const Line = styled.line`
  stroke: #999;
  stroke-width: 2;
`;
const Base = styled.line`
  stroke: #777;
  stroke-width: 2;
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
export const BarbellAnchor = ({ hand, anchor, d }: MachineLineProps) => (
  <>
    {/* <Line x1={hand.x[0]} y1={hand.y[0]} x2={hand.x[0] + 10} y2={hand.y[0] + 15}>
      <Ani
        arr={hand.x.map((x) => x + 22 / (anchor.x[0] / (x - 15)))}
        attr="x1"
        dur={d}
      />
      <Ani
        arr={hand.x.map((x) => x + 1 * (anchor.x[0] / (x + 45)))}
        attr="x2"
        dur={d}
      />
      <Ani
        arr={hand.y.map((y) => y + 1.5 * (anchor.y[0] / y))}
        attr="y1"
        dur={d}
      />
      <Ani
        arr={hand.y.map((y) => y + 28 / (anchor.y[0] / (y - 2)))}
        attr="y2"
        dur={d}
      />
    </Line> */}
    <Line x1={hand.x[0]} y1={hand.y[0]} x2={anchor.x[0]} y2={anchor.y[0]}>
      <Ani arr={hand.x} attr="x1" dur={d} />
      <Ani arr={hand.y} attr="y1" dur={d} />
    </Line>
    <Base
      x1={anchor.x[0] - 5}
      y1={anchor.y[0]}
      x2={anchor.x[0] + 5}
      y2={anchor.y[0]}
    />
    <Base
      x1={anchor.x[0] + 0.5}
      y1={anchor.y[0] - 3}
      x2={anchor.x[0] + 0.5}
      y2={anchor.y[0]}
    />
  </>
);
