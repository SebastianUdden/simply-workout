import styled from "styled-components";
import Ani from "./Animation";
import { LeftDisc, RightDisc } from "./Dumbbell";
import { overhang } from "./props/Pulldown";
import { Positions } from "./Stickman";

interface Props {
  duration?: number;
  direction?: "Forward" | "Side";
  positions?: Positions;
  size?: string;
  background?: any;
  left?: boolean;
  right?: boolean;
  hands: string;
}

export const DEFAULT_POSITIONS = {
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

const StickmanHolding = ({
  duration = 3,
  direction = "Side",
  positions = DEFAULT_POSITIONS,
  size = "100%",
  background,
  left = true,
  right = true,
  hands,
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
  } = positions;
  const discSize = hands === "barbell" ? 6 : 5;
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

  const leftDumbbellL = (
    <LeftDisc
      id="left-discL"
      cx={leftHand.x[0] - 1}
      cy={leftHand.y[0]}
      r={discSize}
    >
      <Ani arr={leftHand.x} attr="cx" dur={d} />
      <Ani arr={leftHand.y} attr="cy" dur={d} />
    </LeftDisc>
  );
  const leftDumbbellR = (
    <RightDisc
      id="left-discR"
      cx={leftHand.x[0] + 1}
      cy={leftHand.y[0]}
      r={discSize}
    >
      <Ani arr={leftHand.x} attr="cx" dur={d} />
      <Ani arr={leftHand.y} attr="cy" dur={d} />
    </RightDisc>
  );
  const rightDumbbellL = (
    <LeftDisc
      id="right-discL"
      cx={rightHand.x[0] - 1}
      cy={rightHand.y[0]}
      r={discSize}
    >
      <Ani arr={rightHand.x} attr="cx" dur={d} />
      <Ani arr={rightHand.y} attr="cy" dur={d} />
    </LeftDisc>
  );
  const rightDumbbellR = (
    <RightDisc
      id="right-discR"
      cx={rightHand.x[0] + 1}
      cy={rightHand.y[0]}
      r={discSize}
    >
      <Ani arr={rightHand.x} attr="cx" dur={d} />
      <Ani arr={rightHand.y} attr="cy" dur={d} />
    </RightDisc>
  );
  const machineBar = (
    <MachineBar
      x1={rightHand.x[0]}
      y1={rightHand.y[0]}
      x2={leftHand.x[0]}
      y2={leftHand.y[0]}
    >
      <Ani arr={rightHand.x} attr="x1" dur={d} />
      <Ani arr={rightHand.y} attr="y1" dur={d} />
      <Ani arr={leftHand.x} attr="x2" dur={d} />
      <Ani arr={leftHand.y} attr="y2" dur={d} />
    </MachineBar>
  );
  const machineLine = (
    <MachineLine
      x1={leftHand.x[0]}
      y1={leftHand.y[0]}
      x2={overhang.x}
      y2={overhang.y}
    >
      <Ani arr={leftHand.x} attr="x1" dur={d} />
      <Ani arr={leftHand.y} attr="y1" dur={d} />
    </MachineLine>
  );

  if (hands === "machine-bar") {
    return (
      <StickBox viewBox="0 0 100 100" size={size}>
        {direction === "Forward" && (
          <>
            {background}
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
            {machineBar}
            {machineLine}
            {neck}
            {theHead}
            {leftLowerLeg}
            {leftUpperLeg}
            {background}
            {torso}
            {rightUpperLeg}
            {rightLowerLeg}
            {rightUpperArm}
            {rightLowerArm}
          </>
        )}
      </StickBox>
    );
  }

  return (
    <StickBox viewBox="0 0 100 100" size={size}>
      {direction === "Forward" && (
        <>
          {background}
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
          {left ? leftDumbbellL : null}
          {leftLowerArm}
          {leftUpperArm}
          {left ? leftDumbbellR : null}
          {neck}
          {theHead}
          {leftLowerLeg}
          {leftUpperLeg}
          {background}
          {torso}
          {rightUpperLeg}
          {rightLowerLeg}
          {rightUpperArm}
          {right ? rightDumbbellL : null}
          {rightLowerArm}
          {right ? rightDumbbellR : null}
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
const MachineBar = styled.line`
  stroke: #000;
  stroke-width: 4;
`;
const MachineLine = styled.line`
  stroke: #777;
  stroke-width: 1;
`;

export default StickmanHolding;
