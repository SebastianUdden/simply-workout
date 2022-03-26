import styled from "styled-components";
import Ani from "./Animation";
import { BarbellAnchor } from "./BarbellAnchor";
import Dumbbell, {
  HorizontalDumbbellBar,
  HorizontalDumbbellL,
  HorizontalDumbbellR,
  VerticalDumbbellBar,
  VerticalDumbbellL,
  VerticalDumbbellR,
} from "./Dumbbell";
import { MachineBar, MachineLine } from "./MachinePull";
import { barbellBase, invertedBarbellBase } from "./props/BarbellAnchorBase";
import { overhang } from "./props/Pulldown";
import { suspensionL, suspensionR } from "./props/TrxSuspension";
import { Positions } from "./Stickman";

interface Props {
  id?: string;
  duration?: number;
  direction?: "Forward" | "Side";
  positions?: Positions;
  size?: string;
  background?: any;
  left?: boolean;
  right?: boolean;
  inverted?: boolean;
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
  inverted = false,
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

  const leftDumbbell = <Dumbbell hands={hands} hand={leftHand} d={d} />;
  const rightDumbbell = <Dumbbell hands={hands} hand={rightHand} d={d} right />;

  const horizontalLeftDumbbellBar = (
    <HorizontalDumbbellBar hand={leftHand} d={d} />
  );
  const horizontalLeftDumbbellR = <HorizontalDumbbellR hand={leftHand} d={d} />;
  const horizontalLeftDumbbellL = <HorizontalDumbbellL hand={leftHand} d={d} />;
  const horizontalRightDumbbellBar = (
    <HorizontalDumbbellBar hand={rightHand} d={d} right />
  );
  const horizontalRightDumbbellR = (
    <HorizontalDumbbellR hand={rightHand} d={d} right />
  );
  const horizontalRightDumbbellL = (
    <HorizontalDumbbellL hand={rightHand} d={d} right />
  );

  const verticalLeftDumbbellBar = <VerticalDumbbellBar hand={leftHand} d={d} />;
  const verticalLeftDumbbellL = <VerticalDumbbellL hand={leftHand} d={d} />;
  const verticalLeftDumbbellR = <VerticalDumbbellR hand={leftHand} d={d} />;

  const verticalRightDumbbellBar = (
    <VerticalDumbbellBar hand={rightHand} d={d} />
  );
  const verticalRightDumbbellL = <VerticalDumbbellL hand={rightHand} d={d} />;
  const verticalRightDumbbellR = <VerticalDumbbellR hand={rightHand} d={d} />;

  const swissBall = (
    <SwissBall id="swiss-ball" cx={rightHand.x[0]} cy={rightHand.y[0]} r="10">
      <Ani
        arr={rightHand.x.map((x, i) => x + 22 - (x - shoulder.x[i]))}
        attr="cx"
        dur={d}
      />
      <Ani arr={rightHand.y.map((y) => y + 10)} attr="cy" dur={d} />
    </SwissBall>
  );

  const machineBar = (
    <MachineBar leftHand={leftHand} rightHand={rightHand} d={d} />
  );
  const machineLine = <MachineLine hand={leftHand} anchor={overhang} d={d} />;
  const suspensionGrip = (
    <MachineBar leftHand={leftHand} rightHand={rightHand} d={d} />
  );
  const suspensionLineL = (
    <MachineLine hand={leftHand} anchor={suspensionL} d={d} />
  );
  const suspensionLineR = (
    <MachineLine hand={rightHand} anchor={suspensionR} d={d} />
  );

  const leftBarbellAnchor = (
    <BarbellAnchor hand={leftHand} anchor={barbellBase} d={d} />
  );
  const rightBarbellAnchor = (
    <BarbellAnchor hand={rightHand} anchor={barbellBase} d={d} />
  );
  const invertedLeftBarbellAnchor = (
    <BarbellAnchor hand={leftHand} anchor={invertedBarbellBase} d={d} />
  );
  const invertedRightBarbellAnchor = (
    <BarbellAnchor hand={rightHand} anchor={invertedBarbellBase} d={d} />
  );

  const kettlebell = (
    <SwissBall id="swiss-ball" cx={rightHand.x[0]} cy={rightHand.y[0]} r="3">
      <Ani
        arr={rightHand.x.map((x, i) => x + 0.6 * (x - rightElbow.x[i]))}
        attr="cx"
        dur={d}
      />
      <Ani
        arr={rightHand.y.map((y, i) => y + 0.7 * (y - rightElbow.y[i]))}
        attr="cy"
        dur={d}
      />
    </SwissBall>
  );
  const medicineBall = (
    <SwissBall id="swiss-ball" cx={rightHand.x[0]} cy={rightHand.y[0]} r="4.5">
      <Ani
        arr={rightHand.x.map((x, i) => x + 0.3 * (x - rightElbow.x[i]))}
        attr="cx"
        dur={d}
      />
      <Ani
        arr={rightHand.y.map((y, i) => y + 0.3 * (y - rightElbow.y[i]))}
        attr="cy"
        dur={d}
      />
    </SwissBall>
  );

  const MACHINE_BAR = "machine-bar";
  const DUMBBELL = "dumbbell";
  const HORIZONTAL_DUMBBELL = "horizontal-dumbbell";
  const VERTICAL_DUMBBELL = "vertical-dumbbell";
  const BARBELL = "barbell";
  const BARBELL_ANCHOR = "barbell-anchor";
  const TRX_SUSPENSION = "trx-suspension";
  const SWISS_BALL = "swiss-ball";
  const MEDICINE_BALL = "medicine-ball";
  const KETTLEBELL = "kettlebell";

  return (
    <StickBox viewBox="0 0 100 100" size={size}>
      {direction === "Side" && (
        <>
          {hands === HORIZONTAL_DUMBBELL && left && horizontalLeftDumbbellBar}
          {hands === VERTICAL_DUMBBELL && left && verticalLeftDumbbellBar}
          {hands === BARBELL_ANCHOR && left && !inverted && leftBarbellAnchor}
          {hands === BARBELL_ANCHOR &&
            left &&
            inverted &&
            invertedLeftBarbellAnchor}
          {leftLowerArm}
          {leftUpperArm}
          {(hands === DUMBBELL || hands === BARBELL) && left && leftDumbbell}
          {hands === HORIZONTAL_DUMBBELL && left && horizontalLeftDumbbellL}
          {hands === HORIZONTAL_DUMBBELL && left && horizontalLeftDumbbellR}
          {hands === VERTICAL_DUMBBELL && left && verticalLeftDumbbellL}
          {hands === VERTICAL_DUMBBELL && left && verticalLeftDumbbellR}
          {hands === MACHINE_BAR && (
            <>
              {machineBar}
              {machineLine}
            </>
          )}
          {hands === TRX_SUSPENSION && (
            <>
              {suspensionGrip}
              {suspensionLineL}
            </>
          )}
          {neck}
          {theHead}
          {leftLowerLeg}
          {leftUpperLeg}
          {background}
          {torso}
          {hands === TRX_SUSPENSION && suspensionLineR}
          {hands === SWISS_BALL && swissBall}
          {(hands === KETTLEBELL || hands === MEDICINE_BALL) && (
            <>
              {rightUpperArm}
              {hands === KETTLEBELL && kettlebell}
              {hands === MEDICINE_BALL && medicineBall}
              {rightLowerArm}
            </>
          )}
          {rightUpperLeg}
          {rightLowerLeg}
          {hands !== KETTLEBELL && hands !== KETTLEBELL && rightUpperArm}
          {hands === HORIZONTAL_DUMBBELL && right && horizontalRightDumbbellBar}
          {hands === VERTICAL_DUMBBELL && right && verticalRightDumbbellBar}
          {hands === BARBELL_ANCHOR && right && !inverted && rightBarbellAnchor}
          {hands === BARBELL_ANCHOR &&
            right &&
            inverted &&
            invertedRightBarbellAnchor}
          {hands !== KETTLEBELL && hands !== KETTLEBELL && rightLowerArm}
          {hands === HORIZONTAL_DUMBBELL && right && horizontalRightDumbbellL}
          {hands === HORIZONTAL_DUMBBELL && right && horizontalRightDumbbellR}
          {hands === VERTICAL_DUMBBELL && right && verticalRightDumbbellL}
          {hands === VERTICAL_DUMBBELL && right && verticalRightDumbbellR}
          {(hands === DUMBBELL || hands === BARBELL) && right && rightDumbbell}
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
  stroke: #999;
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

const SwissBall = styled.circle`
  stroke: #aaa;
  fill: #aaa;
`;

export default StickmanHolding;
