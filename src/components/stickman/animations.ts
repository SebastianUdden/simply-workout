import { bearBack, bearFront } from "./positions-side/bear";
import { jumpHigh, jumpLow, jumpMiddle } from "./positions-side/jumping";
import { pushupHigh, pushupKneeHigh, pushupLow } from "./positions-side/pushup";
import { sitting, squatHigh } from "./positions-side/sitting";
import {
  standing,
  standingAlt,
  standingArmsHigh,
} from "./positions-side/standing";

export const stand = [standing, standingAlt, standing];
export const raiseArms = [standing, standingArmsHigh, standing];
export const jump = [
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
];
export const sitdown = [sitting, squatHigh, standing, squatHigh, sitting];
export const squat = [squatHigh, standing, squatHigh];
export const pushup = [pushupLow, pushupHigh, pushupLow];
export const pushupKnee = [pushupLow, pushupKneeHigh, pushupLow];
export const burpee = [
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
];
