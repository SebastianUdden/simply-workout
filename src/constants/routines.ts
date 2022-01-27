import { estimateTime } from "../utils";
import { workoutFormats } from "./formats";
import { exerciseTypes } from "../constants/exerciseTypes";

const ids = [
  "124",
  "105",
  "119",
  "139",
  "131",
  "205",
  "201",
  "202",
  "7",
  "203",
  "301",
];
const selectedFormat = workoutFormats[3];
const selectedExercises: any[] = exerciseTypes.filter((f) =>
  ids.some((id) => id === f.id)
);
export const defaultRoutines = [
  {
    id: "1",
    name: "Example routine",
    format: selectedFormat,
    exercises: selectedExercises.map((e) => ({
      ...e,
      unit: e.unit,
      value: 10,
    })),
    timeToComplete: estimateTime(selectedFormat, selectedExercises),
  },
];
