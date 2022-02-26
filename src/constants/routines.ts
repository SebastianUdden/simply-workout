import { estimateTime } from "../utils";
import { workoutFormats } from "./formats";
import { exerciseTypes } from "../constants/exerciseTypes";

const homeIds = ["3", "6", "5", "9", "13", "21", "10", "15"];
const outsideIds = ["2", "4", "24", "7", "11", "5", "21", "2"];
const odenplanIds = [
  "124",
  "105",
  "119",
  "131",
  "139",
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
export const defaultRoutines = [
  {
    id: "1",
    name: "Gym routine",
    format: workoutFormats[0],
    exercises: odenplanExercises.map((e) => ({
      ...e,
      unit: e.unit,
      value: 10,
    })),
    timeToComplete: estimateTime(workoutFormats[0], odenplanExercises),
  },
  {
    id: "2",
    name: "Home routine",
    format: workoutFormats[0],
    exercises: homeExercises.map((e) => ({
      ...e,
      unit: e.unit,
      value: 10,
    })),
    timeToComplete: estimateTime(workoutFormats[0], homeExercises),
  },
  {
    id: "3",
    name: "Outside routine",
    format: workoutFormats[0],
    exercises: outsideExercises.map((e) => ({
      ...e,
      unit: e.unit,
      value: 10,
    })),
    timeToComplete: estimateTime(workoutFormats[0], outsideExercises),
  },
];
