import styled from "styled-components";
import Ani from "./Animation";
import { PositionArray } from "./Stickman";

export const Disc = styled.circle<{ right?: boolean }>`
  stroke: ${(p) => (p.right ? "#333" : "#555")};
  fill: #777;
`;
export const RightDisc = styled.circle`
  stroke: #333;
  fill: #777;
`;
export const AngleDisc = styled.line<{ right?: boolean }>`
  stroke: ${(p) => (p.right ? "#3a3a3a" : "#2a2a2a")};
`;
export const AngleLeftDisc = styled.line`
  stroke: ;
`;
export const AngleBar = styled.line`
  stroke: #555;
  stroke-linecap: square;
`;
interface DumbbellProps {
  hands?: string;
  hand: PositionArray;
  d: number;
  right?: boolean;
}

export const Dumbbell = ({ hands, hand, d, right }: DumbbellProps) => (
  <Disc
    cx={hand.x[0]}
    cy={hand.y[0]}
    r={hands === "barbell" ? 6 : 5}
    right={right}
  >
    <Ani arr={hand.x} attr="cx" dur={d} />
    <Ani arr={hand.y} attr="cy" dur={d} />
  </Disc>
);

export const HorizontalDumbbellBar = ({ hand, d }: DumbbellProps) => (
  <AngleBar x1={hand.x[0] + 7} x2={hand.x[0] - 7} y1={hand.y[0]} y2={hand.y[0]}>
    <Ani arr={hand.x.map((x: number) => x + 7)} attr="x1" dur={d} />
    <Ani arr={hand.x.map((x: number) => x - 7)} attr="x2" dur={d} />
    <Ani arr={hand.y} attr="y1" dur={d} />
    <Ani arr={hand.y} attr="y2" dur={d} />
  </AngleBar>
);

export const HorizontalDumbbellR = ({ hand, d, right }: DumbbellProps) => (
  <AngleDisc
    right={right}
    x1={hand.x[0] + 6}
    x2={hand.x[0] + 6}
    y1={hand.y[0] + 4}
    y2={hand.y[0] - 4}
  >
    <Ani arr={hand.x.map((x: number) => x + 6)} attr="x1" dur={d} />
    <Ani arr={hand.x.map((x: number) => x + 6)} attr="x2" dur={d} />
    <Ani arr={hand.y.map((x: number) => x + 4)} attr="y1" dur={d} />
    <Ani arr={hand.y.map((x: number) => x - 4)} attr="y2" dur={d} />
  </AngleDisc>
);
export const HorizontalDumbbellL = ({ hand, d, right }: DumbbellProps) => (
  <AngleDisc
    right={right}
    x1={hand.x[0] - 6}
    x2={hand.x[0] - 6}
    y1={hand.y[0] + 4}
    y2={hand.y[0] - 4}
  >
    <Ani arr={hand.x.map((x: number) => x - 6)} attr="x1" dur={d} />
    <Ani arr={hand.x.map((x: number) => x - 6)} attr="x2" dur={d} />
    <Ani arr={hand.y.map((x: number) => x + 4)} attr="y1" dur={d} />
    <Ani arr={hand.y.map((x: number) => x - 4)} attr="y2" dur={d} />
  </AngleDisc>
);

export const VerticalDumbbellBar = ({ hand, d }: DumbbellProps) => (
  <AngleBar x1={hand.x[0]} x2={hand.x[0]} y1={hand.y[0] + 7} y2={hand.y[0] - 7}>
    <Ani arr={hand.x} attr="x1" dur={d} />
    <Ani arr={hand.x} attr="x2" dur={d} />
    <Ani arr={hand.y.map((y: number) => y + 7)} attr="y1" dur={d} />
    <Ani arr={hand.y.map((y: number) => y - 7)} attr="y2" dur={d} />
  </AngleBar>
);

export const VerticalDumbbellR = ({ hand, d, right }: DumbbellProps) => (
  <AngleDisc
    right={right}
    x1={hand.x[0] + 4}
    x2={hand.x[0] - 4}
    y1={hand.y[0] + 6}
    y2={hand.y[0] + 6}
  >
    <Ani arr={hand.x.map((x: number) => x + 4)} attr="x1" dur={d} />
    <Ani arr={hand.x.map((x: number) => x - 4)} attr="x2" dur={d} />
    <Ani arr={hand.y.map((x: number) => x + 6)} attr="y1" dur={d} />
    <Ani arr={hand.y.map((x: number) => x + 6)} attr="y2" dur={d} />
  </AngleDisc>
);
export const VerticalDumbbellL = ({ hand, d, right }: DumbbellProps) => (
  <AngleDisc
    right={right}
    x1={hand.x[0] + 4}
    x2={hand.x[0] - 4}
    y1={hand.y[0] - 6}
    y2={hand.y[0] - 6}
  >
    <Ani arr={hand.x.map((x: number) => x + 4)} attr="x1" dur={d} />
    <Ani arr={hand.x.map((x: number) => x - 4)} attr="x2" dur={d} />
    <Ani arr={hand.y.map((x: number) => x - 6)} attr="y1" dur={d} />
    <Ani arr={hand.y.map((x: number) => x - 6)} attr="y2" dur={d} />
  </AngleDisc>
);

export default Dumbbell;
