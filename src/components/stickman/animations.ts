import { anim } from "./Animation";
import { sidePlankAlt1, sidePlankAlt2 } from "./positions-front/sidePlank";
import { bearBack, bearFront } from "./positions-side/bear";
import {
  birdDogHigh,
  birdDogHighReverse,
  birdDogLow,
} from "./positions-side/birdDog";
import { calfRaiseHigh, calfRaiseLow } from "./positions-side/calrRaise";
import { chinupHigh, chinupMiddle } from "./positions-side/chinup";
import { gluteBridgeHigh, gluteBridgeLow } from "./positions-side/gluteBridge";
import { jumpHigh, jumpLow, jumpMiddle } from "./positions-side/jumping";
import { plankAlt1, plankAlt2 } from "./positions-side/plank";
import { pullupHigh, pullupMiddle } from "./positions-side/pullup";
import { pushupHigh, pushupKneeHigh, pushupLow } from "./positions-side/pushup";
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
} from "./positions-side/running";
import { sitting, squatHigh, squatLow } from "./positions-side/sitting";
import { situpLow, situpHigh } from "./positions-side/situp";
import {
  standing,
  standingAlt,
  standingArmsHigh,
} from "./positions-side/standing";

export const stand = {
  speed: 2,
  animation: [standing, standingAlt, standing],
};
export const raiseArms = {
  speed: 2,
  animation: [standing, standingArmsHigh, standing],
};
export const jump = {
  speed: 2,
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
  speed: 2,
  animation: [pushupLow, pushupHigh, pushupLow],
};
export const situp = {
  speed: 2,
  animation: [situpLow, situpHigh, situpLow],
};
export const squat = {
  speed: 2,
  animation: [standing, squatHigh, squatLow, squatHigh, standing],
};
export const plank = {
  speed: 2,
  animation: [plankAlt1, plankAlt2, plankAlt1],
};
export const gluteBridge = {
  speed: 2,
  animation: [gluteBridgeLow, gluteBridgeHigh, gluteBridgeLow],
};
export const calfRaise = {
  speed: 1.3,
  animation: [calfRaiseLow, calfRaiseHigh, calfRaiseLow],
};
export const sidePlank = {
  speed: 2,
  animation: [sidePlankAlt1, sidePlankAlt2, sidePlankAlt1],
};
export const birdDog = {
  speed: 2,
  animation: [
    birdDogLow,
    birdDogHigh,
    birdDogLow,
    birdDogHighReverse,
    birdDogLow,
  ],
};

export const running = {
  speed: 0.7,
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
  speed: 2,
  animation: [sitting, squatHigh, standing, squatHigh, sitting],
};
export const pushupKnee = {
  speed: 2,
  animation: [pushupLow, pushupKneeHigh, pushupLow],
};
export const pullup = {
  speed: 2,
  animation: [
    standingArmsHigh,
    pullupMiddle,
    pullupHigh,
    pullupMiddle,
    standingArmsHigh,
  ],
};
export const chinup = {
  speed: 2,
  animation: [
    standingArmsHigh,
    chinupMiddle,
    chinupHigh,
    chinupMiddle,
    standingArmsHigh,
  ],
};
export const burpee = {
  speed: 2,
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

const formatName = (name: string) => {
  const n = name.split("(")[0];
  const newName = n
    .trim()
    .split(" ")
    .map((word, i) =>
      i !== 0 ? `${word[0].toUpperCase()}${word.slice(1, word.length)}` : word
    )
    .join("");
  return newName;
};

export const animations: any = {
  pushup,
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
};

export const getAnimation = (name: string) => {
  const selected = animations[formatName(name)];
  if (!selected) return null;
  return {
    positions: anim(selected.animation),
    speed: selected.speed,
  };
};
