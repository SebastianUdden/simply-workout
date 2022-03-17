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

export const dumbbellBenchPress = {
  duration: 2,
  animation: [
    dumbbellBenchPressLow,
    dumbbellBenchPressHigh,
    dumbbellBenchPressLow,
  ],
  prop: "bench",
  hands: "dumbbell",
};
export const dumbbellTricepExtension = {
  duration: 3,
  animation: [
    dumbbellTricepExtensionLow,
    dumbbellTricepExtensionHigh,
    dumbbellTricepExtensionLow,
  ],
  prop: "bench",
  hands: "dumbbell",
};
export const dumbbellStandingOverheadPress = {
  duration: 3,
  animation: [
    dumbbellStandingOverheadPressLow,
    dumbbellStandingOverheadPressHigh,
    dumbbellStandingOverheadPressLow,
  ],
  hands: "dumbbell",
};
export const dumbbellLateralRaise = {
  duration: 3,
  animation: [
    dumbbellLateralRaiseLow,
    dumbbellLateralRaiseHigh,
    dumbbellLateralRaiseLow,
  ],
  hands: "dumbbell",
};
export const dumbbellOneArmRow = {
  duration: 3,
  animation: [
    dumbbellOneArmRowLow,
    dumbbellOneArmRowHigh,
    dumbbellOneArmRowLow,
  ],
  prop: "bench",
  hands: "dumbbell",
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
const overheadBarbellPress = {
  duration: 3,
  animation: [
    dumbbellStandingOverheadPressLow,
    dumbbellStandingOverheadPressHigh,
    dumbbellStandingOverheadPressLow,
  ],
  hands: "barbell",
};

export const animateFreeWeight = {
  dumbbellBenchPress,
  dumbbellTricepExtension,
  dumbbellStandingOverheadPress,
  dumbbellLateralRaise,
  dumbbellOneArmRow,
  barbellBenchPress,
  overheadBarbellPress,
};
