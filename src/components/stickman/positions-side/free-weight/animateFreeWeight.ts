import {
  dumbbellTricepExtensionHigh,
  dumbbellTricepExtensionLow,
} from "./dumbbellTricepExtension";
import {
  dumbbellBenchPressHigh,
  dumbbellBenchPressLow,
} from "./dumbbellBenchPress";
import {
  dumbbellStandingOverheadPressHigh,
  dumbbellStandingOverheadPressLow,
} from "./dumbbellStandingOverheadPress";
import {
  dumbbellLateralRaiseHigh,
  dumbbellLateralRaiseLow,
} from "./dumbbellLateralRaise";
import {
  barbellBenchPressHigh,
  barbellBenchPressLow,
} from "./barbellBenchPress";
import {
  dumbbellOneArmRowHigh,
  dumbbellOneArmRowLow,
} from "./dumbbellOneArmRow";
import { barbellBackSquatHigh, barbellBackSquatLow } from "./barbellBackSquat";
import {
  barbellBentOverRowHigh,
  barbellBentOverRowLow,
} from "./barbellBentOverRow";
import {
  barbellBicepCurlHigh,
  barbellBicepCurlLow,
  barbellBicepCurlMiddle,
} from "./barbellBicepCurl";
import { barbellDeadliftHigh, barbellDeadliftLow } from "./barbellDeadlift";
import {
  barbellDeclineBenchPressHigh,
  barbellDeclineBenchPressLow,
} from "./barbellDeclineBenchPress";
import {
  barbellInclineBenchPressHigh,
  barbellInclineBenchPressLow,
} from "./barbellInclineBenchPress";
import {
  dumbbellInclineBiecpCurlHigh,
  dumbbellInclineBiecpCurlLow,
} from "./dumbbellInclineBicepCurl";
import {
  dumbbellInclineFlyeHigh,
  dumbbellInclineFlyeLow,
} from "./dumbbellInclineFlye";
import {
  dumbbellRomanianDeadliftHigh,
  dumbbellRomanianDeadliftLow,
} from "./dumbbellRomanianDeadlift";
import {
  dumbbellFarmersWalkPart1,
  dumbbellFarmersWalkPart2,
} from "./dumbbellFarmersWalk";
import {
  barbellGoodMorningHigh,
  barbellGoodMorningLow,
} from "./barbellGoodMorning";
import {
  barbellHalfKneelingLandminePressHigh,
  barbellHalfKneelingLandminePressLow,
} from "./barbellHalfKneelingLandminePress";
import {
  kettlebellSwingHigh,
  kettlebellSwingHighStop,
  kettlebellSwingLow,
  kettlebellSwingLowHigh,
  kettlebellSwingMiddleHigh,
  kettlebellSwingMiddleLow,
} from "./kettlebellSwing";
import {
  medicineBallSlamHigh,
  medicineBallSlamHighStop,
  medicineBallSlamLow,
  medicineBallSlamMiddleHigh,
  medicineBallSlamMiddleLow,
} from "./medicineBallSlam";
import { barbellRackPullHigh, barbellRackPullLow } from "./barbellRackPull";
import {
  dumbbellRearDeltRaiseHigh,
  dumbbellRearDeltRaiseLow,
} from "./dumbbellRearDeltRaise";
import { dumbbellShrugHigh, dumbbellShrugLow } from "./dumbbellShrug";
import { tBarRowHigh, tBarRowLow } from "./tBarRow";
import {
  weightedHipThrustHigh,
  weightedHipThrustLow,
} from "./weightedHipThrust";

const dumbbellBenchPress = {
  duration: 2,
  animation: [
    dumbbellBenchPressLow,
    dumbbellBenchPressHigh,
    dumbbellBenchPressLow,
  ],
  prop: "bench",
  hands: "dumbbell",
};
const dumbbellTricepExtension = {
  duration: 3,
  animation: [
    dumbbellTricepExtensionLow,
    dumbbellTricepExtensionHigh,
    dumbbellTricepExtensionLow,
  ],
  prop: "bench",
  hands: "vertical-dumbbell",
};
const dumbbellStandingOverheadPress = {
  duration: 3,
  animation: [
    dumbbellStandingOverheadPressLow,
    dumbbellStandingOverheadPressHigh,
    dumbbellStandingOverheadPressLow,
  ],
  hands: "dumbbell",
};
const dumbbellLateralRaise = {
  duration: 3,
  animation: [
    dumbbellLateralRaiseLow,
    dumbbellLateralRaiseHigh,
    dumbbellLateralRaiseLow,
  ],
  hands: "dumbbell",
};
const dumbbellOneArmRow = {
  duration: 3,
  animation: [
    dumbbellOneArmRowLow,
    dumbbellOneArmRowHigh,
    dumbbellOneArmRowLow,
  ],
  prop: "bench",
  hands: "horizontal-dumbbell",
  right: false,
};
export const barbellBenchPress = {
  duration: 3,
  animation: [
    barbellBenchPressLow,
    barbellBenchPressHigh,
    barbellBenchPressLow,
  ],
  prop: "bench",
  hands: "barbell",
};
const barbellDeclineBenchPress = {
  duration: 3,
  animation: [
    barbellDeclineBenchPressLow,
    barbellDeclineBenchPressHigh,
    barbellDeclineBenchPressLow,
  ],
  prop: "bench",
  angle: -0.25,
  hands: "barbell",
};
const dumbbellDeclineBenchPress = {
  ...barbellDeclineBenchPress,
  hands: "dumbbell",
};
const dumbbellInclineBicepCurl = {
  duration: 3,
  animation: [
    dumbbellInclineBiecpCurlLow,
    dumbbellInclineBiecpCurlHigh,
    dumbbellInclineBiecpCurlLow,
  ],
  hands: "dumbbell",
  prop: "bench",
  angle: 0.5,
};
const dumbbellInclineFlye = {
  duration: 3,
  animation: [
    dumbbellInclineFlyeLow,
    dumbbellInclineFlyeHigh,
    dumbbellInclineFlyeLow,
  ],
  hands: "horizontal-dumbbell",
  prop: "bench",
  angle: 0.3,
};
const dumbbellRomanianDeadlift = {
  duration: 4,
  animation: [
    dumbbellRomanianDeadliftHigh,
    dumbbellRomanianDeadliftLow,
    dumbbellRomanianDeadliftHigh,
  ],
  hands: "dumbbell",
};
const dumbbellFarmersWalk = {
  duration: 1.5,
  animation: [
    dumbbellFarmersWalkPart1,
    dumbbellFarmersWalkPart2,
    dumbbellFarmersWalkPart1,
  ],
  hands: "horizontal-dumbbell",
};
const dumbbellShrug = {
  duration: 3,
  animation: [dumbbellShrugLow, dumbbellShrugHigh, dumbbellShrugLow],
  hands: "horizontal-dumbbell",
};
const barbellInclineBenchPress = {
  duration: 3,
  animation: [
    barbellInclineBenchPressLow,
    barbellInclineBenchPressHigh,
    barbellInclineBenchPressLow,
  ],
  prop: "bench",
  angle: 0.3,
  hands: "barbell",
};
const dumbbellInclineBenchPress = {
  ...barbellInclineBenchPress,
  hands: "dumbbell",
};
const barbellOverheadPress = {
  duration: 3,
  animation: [
    dumbbellStandingOverheadPressLow,
    dumbbellStandingOverheadPressHigh,
    dumbbellStandingOverheadPressLow,
  ],
  hands: "barbell",
};
const barbellBentOverRow = {
  duration: 3,
  animation: [
    barbellBentOverRowLow,
    barbellBentOverRowHigh,
    barbellBentOverRowLow,
  ],
  hands: "barbell",
};
const tBarRow = {
  duration: 3,
  animation: [tBarRowLow, tBarRowHigh, tBarRowLow],
  hands: "barbell-anchor",
  inverted: true,
  right: false,
};
const barbellBicepCurl = {
  duration: 3,
  animation: [
    barbellBicepCurlLow,
    barbellBicepCurlMiddle,
    barbellBicepCurlHigh,
    barbellBicepCurlMiddle,
    barbellBicepCurlLow,
  ],
  hands: "barbell",
};
const dumbbellBicepCurl = {
  ...barbellBicepCurl,
  hands: "dumbbell",
};
const dumbbellRearDeltRaise = {
  duration: 3,
  animation: [
    dumbbellRearDeltRaiseLow,
    dumbbellRearDeltRaiseHigh,
    dumbbellRearDeltRaiseLow,
  ],
  hands: "horizontal-dumbbell",
};

const barbellBackSquat = {
  duration: 5,
  animation: [
    barbellBackSquatHigh,
    barbellBackSquatHigh,
    barbellBackSquatLow,
    barbellBackSquatLow,
    barbellBackSquatHigh,
  ],
  hands: "barbell",
};
const barbellDeadlift = {
  duration: 5,
  animation: [
    barbellDeadliftHigh,
    barbellDeadliftHigh,
    barbellDeadliftLow,
    barbellDeadliftLow,
    barbellDeadliftHigh,
  ],
  hands: "barbell",
};
const barbellRackPull = {
  duration: 5,
  animation: [
    barbellRackPullHigh,
    barbellRackPullHigh,
    barbellRackPullLow,
    barbellRackPullLow,
    barbellRackPullHigh,
  ],
  prop: "barbell-rack",
  hands: "barbell",
};
const barbellGoodMorning = {
  duration: 4,
  animation: [
    barbellGoodMorningHigh,
    barbellGoodMorningLow,
    barbellGoodMorningHigh,
  ],
  hands: "barbell",
};
const barbellHalfKneelingLandminePress = {
  duration: 3,
  animation: [
    barbellHalfKneelingLandminePressLow,
    barbellHalfKneelingLandminePressHigh,
    barbellHalfKneelingLandminePressHigh,
    barbellHalfKneelingLandminePressLow,
    barbellHalfKneelingLandminePressLow,
  ],
  hands: "barbell-anchor",
  right: false,
};
const kettlebellSwing = {
  duration: 3.5,
  animation: [
    kettlebellSwingLow,
    kettlebellSwingLowHigh,
    kettlebellSwingMiddleLow,
    kettlebellSwingMiddleHigh,
    kettlebellSwingHigh,
    kettlebellSwingHighStop,
    kettlebellSwingHigh,
    kettlebellSwingMiddleHigh,
    kettlebellSwingMiddleLow,
    kettlebellSwingLowHigh,
    kettlebellSwingLow,
  ],
  hands: "kettlebell",
};
const medicineBallSlam = {
  duration: 4,
  animation: [
    medicineBallSlamHighStop,
    medicineBallSlamHigh,
    medicineBallSlamMiddleHigh,
    medicineBallSlamMiddleLow,
    medicineBallSlamLow,
    medicineBallSlamMiddleLow,
    medicineBallSlamMiddleHigh,
    medicineBallSlamHigh,
    medicineBallSlamHighStop,
  ],
  hands: "medicine-ball",
};
const weightedHipThrust = {
  animation: [
    weightedHipThrustLow,
    weightedHipThrustHigh,
    weightedHipThrustLow,
  ],
  prop: "sideways-bench",
  hands: "barbell",
};

export const animateFreeWeight = {
  dumbbellBenchPress,
  dumbbellTricepExtension,
  dumbbellStandingOverheadPress,
  dumbbellLateralRaise,
  dumbbellOneArmRow,
  dumbbellBicepCurl,
  dumbbellDeclineBenchPress,
  dumbbellInclineBenchPress,
  dumbbellInclineBicepCurl,
  dumbbellInclineFlye,
  dumbbellRomanianDeadlift,
  dumbbellRearDeltRaise,
  dumbbellFarmersWalk,
  dumbbellShrug,
  barbellBenchPress,
  barbellDeclineBenchPress,
  barbellInclineBenchPress,
  barbellBentOverRow,
  barbellBicepCurl,
  barbellDeadlift,
  barbellRackPull,
  barbellOverheadPress,
  barbellBackSquat,
  barbellGoodMorning,
  barbellHalfKneelingLandminePress,
  kettlebellSwing,
  medicineBallSlam,
  tBarRow,
  weightedHipThrust,
};
