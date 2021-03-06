import { estimateTime } from "../utils";
import { MADCOW_A, MADCOW_B, workoutFormats } from "./formats";
import { exerciseTypes } from "../constants/exerciseTypes";
import {
  arnold,
  home,
  madcowFriday,
  madcowMonday,
  madcowWednesday,
  newbieA,
  newbieB,
  odenplan,
  outside,
  pushup,
  startingStrengthA,
  startingStrengthB,
  wholebodyA,
  wholebodyB,
} from "./ids";

const match = (exerciseIds: (string | string[])[]) =>
  exerciseIds.map((id) => exerciseTypes.find((f) => id === f.id));

export const MORNING_PUSHUPS = {
  id: "0",
  name: "Morning pushups",
  color: "gold",
  format: workoutFormats[0],
  exerciseIds: pushup,
  timeToComplete: estimateTime(workoutFormats[0], match(pushup)),
  workouts: [],
};
export const GYM_ROUTINE = {
  id: "1",
  name: "Gym routine",
  color: "magenta",
  format: workoutFormats[0],
  exerciseIds: odenplan,
  timeToComplete: estimateTime(workoutFormats[0], match(odenplan)),
  workouts: [],
};
export const HOME_ROUTINE = {
  id: "2",
  name: "Home routine",
  color: "orange",
  format: workoutFormats[0],
  exerciseIds: home,
  timeToComplete: estimateTime(workoutFormats[0], match(home)),
  workouts: [],
};
export const OUTSIDE_ROUTINE = {
  id: "3",
  name: "Outside routine",
  color: "green",
  format: workoutFormats[0],
  exerciseIds: outside,
  timeToComplete: estimateTime(workoutFormats[0], match(outside)),
  workouts: [],
};
export const MADCOW_1 = {
  id: "4",
  name: "Madcow 1: Monday",
  color: "red",
  format: MADCOW_A,
  exerciseIds: madcowMonday,
  timeToComplete: estimateTime(MADCOW_A, match(madcowMonday)),
  workouts: [],
};
export const MADCOW_2 = {
  id: "5",
  name: "Madcow 2: Wednesday",
  color: "crimson",
  format: MADCOW_B,
  exerciseIds: madcowWednesday,
  timeToComplete: estimateTime(MADCOW_B, match(madcowWednesday)),
  workouts: [],
};
export const MADCOW_3 = {
  id: "6",
  name: "Madcow 3: Friday",
  color: "darkred",
  format: MADCOW_B,
  exerciseIds: madcowFriday,
  timeToComplete: estimateTime(MADCOW_B, match(madcowFriday)),
  workouts: [],
};
export const STARTING_STRENGTH_A = {
  id: "7",
  name: "Starting strength: A",
  color: "darkorange",
  format: workoutFormats[0],
  exerciseIds: startingStrengthA,
  timeToComplete: estimateTime(workoutFormats[0], match(startingStrengthA)),
  workouts: [],
};
export const STARTING_STRENGTH_B = {
  id: "8",
  name: "Starting strength: B",
  color: "orange",
  format: workoutFormats[0],
  exerciseIds: startingStrengthB,
  timeToComplete: estimateTime(workoutFormats[0], match(startingStrengthB)),
  workouts: [],
};
export const NEWBIE_A = {
  id: "9",
  name: "Newbie: A",
  color: "deepskyblue",
  format: workoutFormats[0],
  exerciseIds: newbieA,
  timeToComplete: estimateTime(workoutFormats[0], match(newbieA)),
  workouts: [],
};
export const NEWBIE_B = {
  id: "10",
  name: "Newbie: B",
  color: "dodgerblue",
  format: workoutFormats[0],
  exerciseIds: newbieB,
  timeToComplete: estimateTime(workoutFormats[0], match(newbieB)),
  workouts: [],
};
export const FULLBODY_A = {
  id: "11",
  name: "Full body workout: A",
  color: "saddlebrown",
  format: workoutFormats[0],
  exerciseIds: wholebodyA,
  timeToComplete: estimateTime(workoutFormats[0], match(wholebodyA)),
  workouts: [],
};
export const FULLBODY_B = {
  id: "12",
  name: "Full body workout: B",
  color: "sienna",
  format: workoutFormats[0],
  exerciseIds: wholebodyB,
  timeToComplete: estimateTime(workoutFormats[0], match(wholebodyB)),
  workouts: [],
};
export const THE_ARNOLD = {
  id: "13",
  name: "Arnold",
  color: "silver",
  format: workoutFormats[0],
  exerciseIds: arnold,
  timeToComplete: estimateTime(workoutFormats[0], match(arnold)),
  workouts: [],
};

export const defaultRoutines = [
  THE_ARNOLD,
  MORNING_PUSHUPS,
  GYM_ROUTINE,
  HOME_ROUTINE,
  OUTSIDE_ROUTINE,
  MADCOW_1,
  MADCOW_2,
  MADCOW_3,
  STARTING_STRENGTH_A,
  STARTING_STRENGTH_B,
  NEWBIE_A,
  NEWBIE_B,
  FULLBODY_A,
  FULLBODY_B,
];
