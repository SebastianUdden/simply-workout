import { Position, PositionArray } from "./Stickman";

const getXY = (bp1: PositionArray, bp2: PositionArray) => ({
  x: [...bp1.x, ...bp2.x],
  y: [...bp1.y, ...bp2.y],
});

export const simpleAnim = (
  pos1: Position,
  pos2: Position,
  goBack?: boolean
) => {
  return {
    head: goBack
      ? getXY(getXY(pos1.head, pos2.head), pos1.head)
      : getXY(pos1.head, pos2.head),
    shoulder: goBack
      ? getXY(getXY(pos1.shoulder, pos2.shoulder), pos1.shoulder)
      : getXY(pos1.shoulder, pos2.shoulder),
    rightElbow: goBack
      ? getXY(getXY(pos1.rightElbow, pos2.rightElbow), pos1.rightElbow)
      : getXY(pos1.rightElbow, pos2.rightElbow),
    leftElbow: goBack
      ? getXY(getXY(pos1.leftElbow, pos2.leftElbow), pos1.leftElbow)
      : getXY(pos1.leftElbow, pos2.leftElbow),
    rightHand: goBack
      ? getXY(getXY(pos1.rightHand, pos2.rightHand), pos1.rightHand)
      : getXY(pos1.rightHand, pos2.rightHand),
    leftHand: goBack
      ? getXY(getXY(pos1.leftHand, pos2.leftHand), pos1.leftHand)
      : getXY(pos1.leftHand, pos2.leftHand),
    hip: goBack
      ? getXY(getXY(pos1.hip, pos2.hip), pos1.hip)
      : getXY(pos1.hip, pos2.hip),
    rightKnee: goBack
      ? getXY(getXY(pos1.rightKnee, pos2.rightKnee), pos1.rightKnee)
      : getXY(pos1.rightKnee, pos2.rightKnee),
    leftKnee: goBack
      ? getXY(getXY(pos1.leftKnee, pos2.leftKnee), pos1.leftKnee)
      : getXY(pos1.leftKnee, pos2.leftKnee),
    rightFoot: goBack
      ? getXY(getXY(pos1.rightFoot, pos2.rightFoot), pos1.rightFoot)
      : getXY(pos1.rightFoot, pos2.rightFoot),
    leftFoot: goBack
      ? getXY(getXY(pos1.leftFoot, pos2.leftFoot), pos1.leftFoot)
      : getXY(pos1.leftFoot, pos2.leftFoot),
  };
};

export const anim = (arr: any) => {
  return arr.reduce(
    (a: any, b: any) => ({
      head: getXY(a.head, b.head),
      shoulder: getXY(a.shoulder, b.shoulder),
      rightElbow: getXY(a.rightElbow, b.rightElbow),
      leftElbow: getXY(a.leftElbow, b.leftElbow),
      rightHand: getXY(a.rightHand, b.rightHand),
      leftHand: getXY(a.leftHand, b.leftHand),
      hip: getXY(a.hip, b.hip),
      rightKnee: getXY(a.rightKnee, b.rightKnee),
      leftKnee: getXY(a.leftKnee, b.leftKnee),
      rightFoot: getXY(a.rightFoot, b.rightFoot),
      leftFoot: getXY(a.leftFoot, b.leftFoot),
    }),
    {
      head: { x: [], y: [] },
      shoulder: { x: [], y: [] },
      rightElbow: { x: [], y: [] },
      leftElbow: { x: [], y: [] },
      rightHand: { x: [], y: [] },
      leftHand: { x: [], y: [] },
      hip: { x: [], y: [] },
      rightKnee: { x: [], y: [] },
      leftKnee: { x: [], y: [] },
      rightFoot: { x: [], y: [] },
      leftFoot: { x: [], y: [] },
    }
  );
};

interface Props {
  attr: string;
  arr: number[];
  dur: number;
}

const Animation = ({ attr, arr, dur }: Props) =>
  arr.length > 1 ? (
    <animate
      attributeName={attr}
      values={arr.join(";")}
      dur={dur}
      repeatCount="indefinite"
    />
  ) : null;

export default Animation;
