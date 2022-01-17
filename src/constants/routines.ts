import { estimateTime } from "../utils";
import { workoutFormats } from "./formats";
import { freeWeight } from "./free-weight";

const selectedFormat = workoutFormats[3];
const selectedExercises: any[] = [freeWeight[0], freeWeight[4], freeWeight[12]];

export const defaultRoutines = [
  {
    id: "1",
    name: "Example routine",
    format: selectedFormat,
    exercises: selectedExercises.map((e) => ({ ...e, unit: "kg", value: 10 })),
    timeToComplete: estimateTime(selectedFormat, selectedExercises),
  },
];
