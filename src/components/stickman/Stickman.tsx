import styled from "styled-components";
import Ani from "./Animation";

export interface PositionArray {
  x: number[];
  y: number[];
}

export interface Position {
  head: PositionArray;
  shoulder: PositionArray;
  rightElbow: PositionArray;
  rightHand: PositionArray;
  leftElbow: PositionArray;
  leftHand: PositionArray;
  hip: PositionArray;
  rightKnee: PositionArray;
  rightFoot: PositionArray;
  leftKnee: PositionArray;
  leftFoot: PositionArray;
}

interface Props {
  duration?: number;
  direction?: "Forward" | "Side";
  position?: Position;
  size?: string;
}

export const DEFAULT_POSITION = {
  head: { x: [50], y: [15] },
  shoulder: { x: [50], y: [30] },
  rightElbow: { x: [65], y: [30] },
  rightHand: { x: [75], y: [20] },
  leftElbow: { x: [35], y: [30] },
  leftHand: { x: [25], y: [20] },
  hip: { x: [50], y: [55] },
  rightKnee: { x: [53], y: [70] },
  rightFoot: { x: [53], y: [90] },
  leftKnee: { x: [47], y: [70] },
  leftFoot: { x: [47], y: [90] },
};

const Stickman = ({
  duration = 3,
  direction = "Side",
  position = DEFAULT_POSITION,
  size = "100%",
}: Props) => {
  const d = duration;
  const {
    head,
    shoulder,
    rightElbow,
    rightHand,
    leftElbow,
    leftHand,
    hip,
    rightKnee,
    rightFoot,
    leftKnee,
    leftFoot,
  } = position;

  const leftUpperArm = (
    <LeftUpperArm
      x1={shoulder.x[0]}
      y1={shoulder.y[0]}
      x2={leftElbow.x[0]}
      y2={leftElbow.y[0]}
    >
      <Ani arr={shoulder.x} attr="x1" dur={d} />
      <Ani arr={shoulder.y} attr="y1" dur={d} />
      <Ani arr={leftElbow.x} attr="x2" dur={d} />
      <Ani arr={leftElbow.y} attr="y2" dur={d} />
    </LeftUpperArm>
  );
  const rightUpperArm = (
    <RightUpperArm
      x1={shoulder.x[0]}
      y1={shoulder.y[0]}
      x2={rightElbow.x[0]}
      y2={rightElbow.y[0]}
    >
      <Ani arr={shoulder.x} attr="x1" dur={d} />
      <Ani arr={shoulder.y} attr="y1" dur={d} />
      <Ani arr={rightElbow.x} attr="x2" dur={d} />
      <Ani arr={rightElbow.y} attr="y2" dur={d} />
    </RightUpperArm>
  );
  const neck = (
    <Neck x1={head.x[0]} y1={head.y[0]} x2={shoulder.x[0]} y2={shoulder.y[0]}>
      <Ani arr={head.x} attr="x1" dur={d} />
      <Ani arr={head.y} attr="y1" dur={d} />
      <Ani arr={shoulder.x} attr="x2" dur={d} />
      <Ani arr={shoulder.y} attr="y2" dur={d} />
    </Neck>
  );
  const torso = (
    <Torso x1={shoulder.x[0]} y1={shoulder.y[0]} x2={hip.x[0]} y2={hip.y[0]}>
      <Ani arr={shoulder.x} attr="x1" dur={d} />
      <Ani arr={shoulder.y} attr="y1" dur={d} />
      <Ani arr={hip.x} attr="x2" dur={d} />
      <Ani arr={hip.y} attr="y2" dur={d} />
    </Torso>
  );
  const leftLowerArm = (
    <LeftLowerArm
      x1={leftElbow.x[0]}
      y1={leftElbow.y[0]}
      x2={leftHand.x[0]}
      y2={leftHand.y[0]}
    >
      <Ani arr={leftElbow.x} attr="x1" dur={d} />
      <Ani arr={leftElbow.y} attr="y1" dur={d} />
      <Ani arr={leftHand.x} attr="x2" dur={d} />
      <Ani arr={leftHand.y} attr="y2" dur={d} />
    </LeftLowerArm>
  );
  const rightLowerArm = (
    <RightLowerArm
      x1={rightElbow.x[0]}
      y1={rightElbow.y[0]}
      x2={rightHand.x[0]}
      y2={rightHand.y[0]}
    >
      <Ani arr={rightElbow.x} attr="x1" dur={d} />
      <Ani arr={rightElbow.y} attr="y1" dur={d} />
      <Ani arr={rightHand.x} attr="x2" dur={d} />
      <Ani arr={rightHand.y} attr="y2" dur={d} />
    </RightLowerArm>
  );
  const leftUpperLeg = (
    <LeftUpperLeg
      x1={hip.x[0]}
      y1={hip.y[0]}
      x2={leftKnee.x[0]}
      y2={leftKnee.y[0]}
    >
      <Ani arr={hip.x} attr="x1" dur={d} />
      <Ani arr={hip.y} attr="y1" dur={d} />
      <Ani arr={leftKnee.x} attr="x2" dur={d} />
      <Ani arr={leftKnee.y} attr="y2" dur={d} />
    </LeftUpperLeg>
  );
  const leftLowerLeg = (
    <LeftLowerLeg
      x1={leftKnee.x[0]}
      y1={leftKnee.y[0]}
      x2={leftFoot.x[0]}
      y2={leftFoot.y[0]}
    >
      <Ani arr={leftKnee.x} attr="x1" dur={d} />
      <Ani arr={leftKnee.y} attr="y1" dur={d} />
      <Ani arr={leftFoot.x} attr="x2" dur={d} />
      <Ani arr={leftFoot.y} attr="y2" dur={d} />
    </LeftLowerLeg>
  );
  const rightUpperLeg = (
    <RightUpperLeg
      x1={hip.x[0]}
      y1={hip.y[0]}
      x2={rightKnee.x[0]}
      y2={rightKnee.y[0]}
    >
      <Ani arr={hip.x} attr="x1" dur={d} />
      <Ani arr={hip.y} attr="y1" dur={d} />
      <Ani arr={rightKnee.x} attr="x2" dur={d} />
      <Ani arr={rightKnee.y} attr="y2" dur={d} />
    </RightUpperLeg>
  );
  const rightLowerLeg = (
    <RightLowerLeg
      x1={rightKnee.x[0]}
      y1={rightKnee.y[0]}
      x2={rightFoot.x[0]}
      y2={rightFoot.y[0]}
    >
      <Ani arr={rightKnee.x} attr="x1" dur={d} />
      <Ani arr={rightKnee.y} attr="y1" dur={d} />
      <Ani arr={rightFoot.x} attr="x2" dur={d} />
      <Ani arr={rightFoot.y} attr="y2" dur={d} />
    </RightLowerLeg>
  );
  const theHead = (
    <Head cx={head.x[0]} cy={head.y[0]} r="3">
      <Ani arr={head.x} attr="cx" dur={d} />
      <Ani arr={head.y} attr="cy" dur={d} />
    </Head>
  );

  return (
    <StickBox viewBox="0 0 100 100" size={size}>
      {direction === "Forward" && (
        <>
          {leftUpperArm}
          {rightUpperArm}
          {neck}
          {torso}
          {leftLowerArm}
          {rightLowerArm}
          {leftUpperLeg}
          {leftLowerLeg}
          {rightUpperLeg}
          {rightLowerLeg}
          {theHead}
        </>
      )}
      {direction === "Side" && (
        <>
          {leftLowerArm}
          {leftUpperArm}
          {neck}
          {theHead}
          {leftLowerLeg}
          {leftUpperLeg}
          {torso}
          {rightUpperLeg}
          {rightLowerLeg}
          {rightUpperArm}
          {rightLowerArm}
        </>
      )}
    </StickBox>
  );
};

const StickBox = styled.svg<{ size: string }>`
  width: ${(p) => p.size || "250px"};
  height: ${(p) => p.size || "250px"};
  max-width: 250px;
  max-height: 250px;
  fill: white;
  stroke: white;
  stroke-width: 5px;
  stroke-linecap: round;
  border: 1px solid white;
`;
const Head = styled.circle`
  stroke: #555;
  fill: #555;
`;
const Neck = styled.line`
  stroke: #444;
`;
const Torso = styled.line`
  stroke: #888;
`;
const Arm = styled.line`
  stroke: #666;
`;
const LeftUpperArm = styled(Arm)`
  stroke: #666;
`;
const LeftLowerArm = styled(Arm)`
  stroke: #777;
`;
const RightUpperArm = styled(Arm)`
  stroke: #777;
`;
const RightLowerArm = styled(Arm)`
  stroke: #888;
`;
const Leg = styled.line`
  stroke: #666;
`;
const LeftUpperLeg = styled(Leg)``;
const LeftLowerLeg = styled(Leg)`
  stroke: #777;
`;
const RightUpperLeg = styled(Leg)`
  stroke: #777;
`;
const RightLowerLeg = styled(Leg)`
  stroke: #888;
`;

export default Stickman;
