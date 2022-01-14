import { Format } from "./components/AddFormat";

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
