import { MOBILITY, mobility } from "./mobility";
import { MACHINE, machine } from "./machine";
import { FREE_WEIGHT, freeWeight } from "./free-weight";
import { BODY_WEIGHT, bodyWeight } from "./body-weight";

const initialize = (e: any) => ({
  ...e,
  values: [{ date: undefined, value: 10 }],
});

export const exerciseNames = [BODY_WEIGHT, FREE_WEIGHT, MACHINE, MOBILITY];
export const exerciseTypes = [
  ...mobility,
  ...bodyWeight,
  ...freeWeight,
  ...machine,
].map(initialize);
