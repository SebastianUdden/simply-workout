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

const homeExercises: any[] = homeIds.map((id) =>
  exerciseTypes.find((f) => id === f.id)
);
const odenplanExercises: any[] = odenplanIds.map((id) =>
  exerciseTypes.find((f) => id === f.id)
);
const outsideExercises: any[] = outsideIds.map((id) =>
  exerciseTypes.find((f) => id === f.id)
);
const pushups = [exerciseTypes.find((f) => "3" === f.id)];

const initialize = (e: any) => ({
  ...e,
  unit: e.unit,
  values: [{ date: undefined, value: 10 }],
});

export const defaultRoutines = [
  {
    id: "0",
    name: "Morning pushups",
    color: "gold",
    format: workoutFormats[0],
    exercises: pushups.map(initialize),
    timeToComplete: estimateTime(workoutFormats[0], pushups),
  },
  {
    id: "1",
    name: "Gym routine",
    color: "magenta",
    format: workoutFormats[0],
    exercises: odenplanExercises.map(initialize),
    timeToComplete: estimateTime(workoutFormats[0], odenplanExercises),
  },
  {
    id: "2",
    name: "Home routine",
    color: "orange",
    format: workoutFormats[0],
    exercises: homeExercises.map(initialize),
    timeToComplete: estimateTime(workoutFormats[0], homeExercises),
  },
  {
    id: "3",
    name: "Outside routine",
    color: "green",
    format: workoutFormats[0],
    exercises: outsideExercises.map(initialize),
    timeToComplete: estimateTime(workoutFormats[0], outsideExercises),
  },
];
