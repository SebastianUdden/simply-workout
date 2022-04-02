import { estimateTime } from "../utils";
import { MADCOW_A, MADCOW_B, workoutFormats } from "./formats";
import { exerciseTypes } from "../constants/exerciseTypes";

// BODYWEIGHT
const PULLUP = "4";
// BARBELL
const SQUAT = "109";
const BENCH = "102";
const DEADLIFT = "108";
const PRESS = "120";
const ROW = "132";
const INCLINE_BENCH = "103";
const BICEP_CURLS = "101";
// DUMBBELL
const ROMANIAN_DEADLIFT = "110";
// MACHINE
const LAT_PULLDOWN = "210";

const match = (exerciseIds: string[]) =>
  exerciseIds.map((id) => exerciseTypes.find((f) => id === f.id));

const home = ["3", "6", "5", "9", "13", "21", "10", "15"];
const outside = ["26", PULLUP, "24", "7", "11", "5", "21", "26"];
const odenplan = [
  "124",
  "105",
  "119",
  "131",
  "138",
  LAT_PULLDOWN,
  "201",
  "202",
  "9",
  BENCH,
];
const pushup = ["3"];

const newbieA = [SQUAT, BENCH, ROW];
const newbieB = [DEADLIFT, PULLUP, PRESS];

const startingStrengthA = [SQUAT, BENCH, DEADLIFT];
const startingStrengthB = [SQUAT, PRESS, PULLUP];

const madcowMonday = [SQUAT, BENCH, ROW, BICEP_CURLS];
const madcowWednesday = [SQUAT, PRESS, DEADLIFT, PULLUP];
const madcowFriday = [SQUAT, BENCH, ROW, INCLINE_BENCH];

const wholebodyA = [SQUAT, BENCH, ROMANIAN_DEADLIFT, ROW];
const wholebodyB = [DEADLIFT, PRESS, SQUAT, PULLUP];

export const defaultRoutines = [
  {
    id: "0",
    name: "Morning pushups",
    color: "gold",
    format: workoutFormats[0],
    exerciseIds: pushup,
    timeToComplete: estimateTime(workoutFormats[0], match(pushup)),
    workouts: [],
  },
  {
    id: "1",
    name: "Gym routine",
    color: "magenta",
    format: workoutFormats[0],
    exerciseIds: odenplan,
    timeToComplete: estimateTime(workoutFormats[0], match(odenplan)),
    workouts: [],
  },
  {
    id: "2",
    name: "Home routine",
    color: "orange",
    format: workoutFormats[0],
    exerciseIds: home,
    timeToComplete: estimateTime(workoutFormats[0], match(home)),
    workouts: [],
  },
  {
    id: "3",
    name: "Outside routine",
    color: "green",
    format: workoutFormats[0],
    exerciseIds: outside,
    timeToComplete: estimateTime(workoutFormats[0], match(outside)),
    workouts: [],
  },
  {
    id: "4",
    name: "Madcow 1: Monday",
    color: "red",
    format: MADCOW_A,
    exerciseIds: madcowMonday,
    timeToComplete: estimateTime(MADCOW_A, match(madcowMonday)),
    workouts: [],
  },
  {
    id: "5",
    name: "Madcow 2: Wednesday",
    color: "crimson",
    format: MADCOW_B,
    exerciseIds: madcowWednesday,
    timeToComplete: estimateTime(MADCOW_B, match(madcowWednesday)),
    workouts: [],
  },
  {
    id: "6",
    name: "Madcow 3: Friday",
    color: "darkred",
    format: MADCOW_B,
    exerciseIds: madcowFriday,
    timeToComplete: estimateTime(MADCOW_B, match(madcowFriday)),
    workouts: [],
  },
  {
    id: "7",
    name: "Starting strength: A",
    color: "darkorange",
    format: workoutFormats[0],
    exerciseIds: startingStrengthA,
    timeToComplete: estimateTime(workoutFormats[0], match(startingStrengthA)),
    workouts: [],
  },
  {
    id: "8",
    name: "Starting strength: B",
    color: "orange",
    format: workoutFormats[0],
    exerciseIds: startingStrengthB,
    timeToComplete: estimateTime(workoutFormats[0], match(startingStrengthB)),
    workouts: [],
  },
  {
    id: "9",
    name: "Newbie: A",
    color: "deepskyblue",
    format: workoutFormats[0],
    exerciseIds: newbieA,
    timeToComplete: estimateTime(workoutFormats[0], match(newbieA)),
    workouts: [],
  },
  {
    id: "10",
    name: "Newbie: B",
    color: "dodgerblue",
    format: workoutFormats[0],
    exerciseIds: newbieB,
    timeToComplete: estimateTime(workoutFormats[0], match(newbieB)),
    workouts: [],
  },
  {
    id: "11",
    name: "Full body workout: A",
    color: "saddlebrown",
    format: workoutFormats[0],
    exerciseIds: wholebodyA,
    timeToComplete: estimateTime(workoutFormats[0], match(wholebodyA)),
    workouts: [],
  },
  {
    id: "12",
    name: "Full body workout: B",
    color: "sienna",
    format: workoutFormats[0],
    exerciseIds: wholebodyB,
    timeToComplete: estimateTime(workoutFormats[0], match(wholebodyB)),
    workouts: [],
  },
];
