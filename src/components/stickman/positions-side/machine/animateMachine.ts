import { latPulldownHigh, latPulldownLow } from "./latPulldowns";
import {
  latPulldown30DegreeHigh,
  latPulldown30DegreeLow,
} from "./latPulldown30Degree";
import { bicepCurlHigh, bicepCurlLow, bicepCurlMiddle } from "./bicepCurl";
import { barbellBenchPress } from "../free-weight/animateFreeWeight";
import { cableWoodchopHigh, cableWoodchopLow } from "./cableWoodchop";
import { cableCrossoverHigh, cableCrossoverLow } from "./cableCrossover";

export const latPulldown = {
  duration: 3,
  animation: [latPulldownLow, latPulldownHigh, latPulldownLow],
  prop: "pulldown",
  hands: "machine-bar",
};
export const latPulldown30Degree = {
  duration: 3,
  animation: [
    latPulldown30DegreeLow,
    latPulldown30DegreeHigh,
    latPulldown30DegreeLow,
  ],
  prop: "pulldown",
  hands: "machine-bar",
};
export const cableWoodchop = {
  duration: 3,
  animation: [
    cableWoodchopLow,
    cableWoodchopHigh,
    cableWoodchopLow,
    cableWoodchopLow,
  ],
  prop: "pulldown",
  hands: "cable-pull",
};
export const cableCrossover = {
  duration: 3,
  animation: [
    cableCrossoverLow,
    cableCrossoverHigh,
    cableCrossoverLow,
    cableCrossoverLow,
  ],
  hands: "cable-cross-pull",
};
export const bicepCurl = {
  duration: 3,
  animation: [
    bicepCurlLow,
    bicepCurlMiddle,
    bicepCurlHigh,
    bicepCurlMiddle,
    bicepCurlLow,
  ],
  prop: "curl-bench",
  hands: "barbell",
};

const benchPress = barbellBenchPress;

export const animateMachine = {
  latPulldown,
  latPulldown30Degree,
  cableWoodchop,
  cableCrossover,
  bicepCurl,
  benchPress,
};
