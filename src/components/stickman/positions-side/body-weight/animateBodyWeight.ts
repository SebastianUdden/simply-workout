import { sidePlankAlt1, sidePlankAlt2 } from "../../positions-front/sidePlank";
import { bearBack, bearFront } from "./bear";
import { birdDogHigh, birdDogHighReverse, birdDogLow } from "./birdDog";
import { calfRaiseHigh, calfRaiseLow } from "./calrRaise";
import { chinupHigh, chinupMiddle } from "./chinup";
import { dipHigh, dipLow } from "./dip";
import { gluteBridgeHigh, gluteBridgeLow } from "./gluteBridge";
import { jumpHigh, jumpLow, jumpMiddle } from "./jumping";
import { plankAlt1, plankAlt2 } from "./plank";
import { pullupHigh, pullupMiddle } from "./pullup";
import { pushupHigh, pushupKneeHigh, pushupLow } from "./pushup";
import {
  runningPart1,
  runningPart2,
  runningPart3,
  runningPart4,
  runningPart5,
  runningPart6,
  runningPart7,
  runningPart8,
  runningPart9,
} from "./running";
import { squatHigh, squatLow } from "./squat";
import { situpLow, situpHigh } from "./situp";
import { standing, standingAlt, standingArmsHigh } from "./standing";
import { sitting } from "./sitting";
import { lungeHigh, lungeHighAlt, lungeLow, lungeLowAlt } from "./lunge";
import { pushupBosuBallHigh, pushupBosuBallLow } from "./pushupBosuBall";
import { pushupTrxHigh, pushupTrxLow } from "./pushupTRX";
import { barbellAbRolloutHigh, barbellAbRolloutLow } from "./barbellAbRollout";

export const stand = {
  duration: 2,
  animation: [standing, standingAlt, standing],
};
export const raiseArms = {
  duration: 2,
  animation: [standing, standingArmsHigh, standing],
};
export const jump = {
  duration: 2,
  animation: [
    standingAlt,
    standing,
    squatHigh,
    jumpLow,
    jumpMiddle,
    jumpHigh,
    jumpMiddle,
    jumpLow,
    squatHigh,
    standing,
    standingAlt,
  ],
};

export const pushup = {
  duration: 2,
  animation: [pushupLow, pushupHigh, pushupLow],
};
export const bosuBallPushup = {
  duration: 2,
  animation: [pushupBosuBallLow, pushupBosuBallHigh, pushupBosuBallLow],
  prop: "bosu-ball",
};
export const trxSuspendedPushup = {
  duration: 2,
  animation: [pushupTrxLow, pushupTrxHigh, pushupTrxLow],
  hands: "trx-suspension",
};
export const barbellAbRollout = {
  duration: 4,
  animation: [barbellAbRolloutLow, barbellAbRolloutHigh, barbellAbRolloutLow],
  hands: "barbell",
};
export const situp = {
  duration: 2,
  animation: [situpLow, situpHigh, situpLow],
};
export const squat = {
  duration: 3,
  animation: [standing, squatHigh, squatLow, squatHigh, standing],
};
export const lunge = {
  duration: 5,
  animation: [
    standing,
    lungeHigh,
    lungeLow,
    lungeHigh,
    standing,
    lungeHighAlt,
    lungeLowAlt,
    lungeHighAlt,
    standing,
  ],
};
export const plank = {
  duration: 2,
  animation: [plankAlt1, plankAlt2, plankAlt1],
};
export const gluteBridge = {
  duration: 2,
  animation: [gluteBridgeLow, gluteBridgeHigh, gluteBridgeLow],
};
export const calfRaise = {
  duration: 1.3,
  animation: [calfRaiseLow, calfRaiseHigh, calfRaiseLow],
};
export const sidePlank = {
  duration: 2,
  animation: [sidePlankAlt1, sidePlankAlt2, sidePlankAlt1],
};
export const birdDog = {
  duration: 6,
  animation: [
    birdDogLow,
    birdDogHigh,
    birdDogHigh,
    birdDogHigh,
    birdDogLow,
    birdDogLow,
    birdDogHighReverse,
    birdDogHighReverse,
    birdDogHighReverse,
    birdDogLow,
    birdDogLow,
  ],
};

export const running = {
  duration: 0.6,
  animation: [
    runningPart1,
    runningPart2,
    runningPart3,
    runningPart4,
    runningPart5,
    runningPart6,
    runningPart7,
    runningPart8,
    runningPart9,
    runningPart1,
  ],
};

export const sitdown = {
  duration: 2,
  animation: [sitting, squatHigh, standing, squatHigh, sitting],
};
export const pushupKnee = {
  duration: 2,
  animation: [pushupLow, pushupKneeHigh, pushupLow],
};
export const pullup = {
  duration: 3,
  animation: [
    standingArmsHigh,
    pullupMiddle,
    pullupHigh,
    pullupMiddle,
    standingArmsHigh,
  ],
  prop: "pullups-bar",
};
export const chinup = {
  duration: 3,
  animation: [
    standingArmsHigh,
    chinupMiddle,
    chinupHigh,
    chinupMiddle,
    standingArmsHigh,
  ],
  prop: "pullups-bar",
};
export const dip = {
  duration: 1.5,
  animation: [dipLow, dipHigh, dipLow],
  prop: "dips-bar",
};
export const burpee = {
  duration: 5,
  animation: [
    pushupLow,
    pushupKneeHigh,
    pushupHigh,
    bearFront,
    bearBack,
    squatHigh,
    jumpLow,
    jumpHigh,
    jumpLow,
    squatHigh,
    bearBack,
    bearFront,
    pushupHigh,
    pushupKneeHigh,
    pushupLow,
  ],
};

export const animateBodyWeight = {
  pushup,
  bosuBallPushup,
  trxSuspendedPushup,
  barbellAbRollout,
  situp,
  squat,
  plank,
  gluteBridge,
  calfRaise,
  sidePlank,
  birdDog,
  running,
  chinup,
  pushupKnee,
  pullup,
  dip,
  lunge,
  burpee,
};
