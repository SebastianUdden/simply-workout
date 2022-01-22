import { estimateTime } from "../utils";
import { bodyWeight } from "./body-weight";
import { workoutFormats } from "./formats";
import { freeWeight } from "./free-weight";
import { machine } from "./machine";

const selectedFormat = workoutFormats[3];
const selectedExercises: any[] = [
  freeWeight.find((f) => f.id === "124"),
  freeWeight.find((f) => f.id === "105"),
  freeWeight.find((f) => f.id === "119"),
  freeWeight.find((f) => f.id === "139"),
  freeWeight.find((f) => f.id === "131"),
  machine.find((m) => m.id === "205"),
  machine.find((m) => m.id === "201"),
  machine.find((m) => m.id === "202"),
  bodyWeight.find((b) => b.id === "7"),
  machine.find((m) => m.id === "203"),
];

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
