import { estimateTime } from "../utils";
import { workoutFormats } from "./formats";
import { exerciseTypes } from "../constants/exerciseTypes";

const homeIds = ["3", "6", "5", "9", "13", "21", "10", "15"];
const outsideIds = ["26", "4", "24", "7", "11", "5", "21", "26"];
const odenplanIds = [
  "124",
  "105",
  "119",
  "131",
  "138",
  "210",
  "201",
  "202",
  "9",
  "102",
];
const pushupIds = ["3"];

const homeExercises: any[] = homeIds.map((id) =>
  exerciseTypes.find((f) => id === f.id)
);
const odenplanExercises: any[] = odenplanIds.map((id) =>
  exerciseTypes.find((f) => id === f.id)
);
const outsideExercises: any[] = outsideIds.map((id) =>
  exerciseTypes.find((f) => id === f.id)
);
const pushups = pushupIds.map((id) => exerciseTypes.find((f) => id === f.id));

export const defaultRoutines = [
  {
    id: "0",
    name: "Morning pushups",
    color: "gold",
    format: workoutFormats[0],
    exerciseIds: pushupIds,
    timeToComplete: estimateTime(workoutFormats[0], pushups),
    workouts: [],
  },
  {
    id: "1",
    name: "Gym routine",
    color: "magenta",
    format: workoutFormats[0],
    exerciseIds: odenplanIds,
    timeToComplete: estimateTime(workoutFormats[0], odenplanExercises),
    workouts: [],
  },
  {
    id: "2",
    name: "Home routine",
    color: "orange",
    format: workoutFormats[0],
    exerciseIds: homeIds,
    timeToComplete: estimateTime(workoutFormats[0], homeExercises),
    workouts: [],
  },
  {
    id: "3",
    name: "Outside routine",
    color: "green",
    format: workoutFormats[0],
    exerciseIds: outsideIds,
    timeToComplete: estimateTime(workoutFormats[0], outsideExercises),
    workouts: [],
  },
];
