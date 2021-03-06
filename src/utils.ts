import {
  ExerciseProps,
  ExerciseValue,
} from "./components/routine/EditExercise";
import { Format } from "./pages/AddFormat";

export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getOldWorkout = () =>
  JSON.parse(localStorage.getItem("simply-workout") || "{}");

export const saveWorkout = (workout: any) =>
  localStorage.setItem("simply-workout", JSON.stringify(workout));

export const calculateTime = (seconds: number) => {
  const minutes = seconds / 60;
  if (minutes < 1) return `${seconds} sec`;
  const s = seconds % 60;
  const h = Math.floor(minutes / 60);
  const m = Math.floor(minutes % 60);
  if (h === 0) return `${m} min${s !== 0 ? ` ${s} sec` : ""}`;
  return `${h} hour${h > 1 ? "s" : ""} ${m !== 0 ? ` ${m} min` : ""}${
    s >= 1 ? ` ${s} sec` : ""
  }`;
};

export const getFormatString = (f: Format) =>
  `${f.sets} sets * ${f.reps} reps = ${f.sets * f.reps} reps, ${calculateTime(
    f.rest
  )} rest, ${f.percentage}%`;

export const estimateTime = (format: any, exercises: any) => {
  if (!format || !exercises) return;
  const restBetweenSets = (format.sets - 1) * format.rest;
  const exerciseCount = exercises.length;
  const totalExerciseRest = exerciseCount * restBetweenSets;
  const exerciseBreaks = exerciseCount - 1;
  const estimatedSetupTime = 60;
  const nextExerciseSetup = exerciseBreaks * estimatedSetupTime;
  const totalExerciseReps = format.sets * format.reps;
  const estimatedTimeToCompleteRep = 6;
  const exerciseTime = totalExerciseReps * estimatedTimeToCompleteRep;
  const totalExerciseTime = exerciseTime * exerciseCount;

  return calculateTime(
    totalExerciseTime + totalExerciseRest + nextExerciseSetup
  );
};

export const searchFor = (searchTerm: string, additionalSearchterm: string) => {
  return `https://www.google.com/search?q=${searchTerm}${
    additionalSearchterm ? `+${additionalSearchterm}` : ""
  }`;
};

export const getPercentageChange = (value: number, percentage: number) =>
  Math.round(1000 * value * (1 + percentage / 100)) / 1000;

export const getNewDate = (d?: string) => {
  const now = d ? new Date(d) : new Date();
  const year = now.getFullYear();
  const month = getZero(now.getMonth() + 1);
  const date = getZero(now.getDate());
  return `${year}-${month}-${date}`;
};

export const getZero = (count: number) => (count < 10 ? `0${count}` : count);

export const getUniqueValues = (arr: any) =>
  Array.from(
    new Set(arr.map((e: any) => e.values.map((d: any) => d.date)).flat())
  ).filter(Boolean);

export const getUnique = (arr: any) => Array.from(new Set(arr)).filter(Boolean);

export const updateExerciseValues = (
  e: any,
  id: string,
  value: ExerciseValue
) => {
  if (e.id === id) {
    let values = e.values.slice();
    const latest = e.values[e.values.length - 1];
    if (latest.date === value.date) {
      values.pop();
    }
    values.push(value);
    return { ...e, values };
  }
  return e;
};

export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const noExerciseFound = {
  name: "N/A",
  unit: "kg",
  values: [],
};

export const getExercisesFromIds = (
  exercises: ExerciseProps[],
  exerciseIds: (string | string[])[]
): ExerciseProps[][] =>
  exerciseIds.map((eid: string | string[]) => {
    if (typeof eid === "string") {
      return [exercises.find(({ id }) => eid === id) || noExerciseFound];
    }
    return eid.map(
      (altId: string) =>
        exercises.find(({ id }) => altId === id) || noExerciseFound
    );
  });
