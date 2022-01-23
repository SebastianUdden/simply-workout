import { useEffect, useState } from "react";
import EditRoutine from "./EditRoutine";
import ViewRoutine from "./ViewRoutine";
import { bodyWeight } from "../../constants/body-weight";
import { freeWeight } from "../../constants/free-weight";
import { machine } from "../../constants/machine";
import { estimateTime, getOldWorkout, saveWorkout, uuidv4 } from "../../utils";

export interface RoutineProps {
  id: string;
  name: string;
  format: any;
  exercises: any[];
  timeToComplete?: string;
}

interface Props {
  routine: RoutineProps;
  i: number;
  formats: any[];
  expandIndex: number;
  onExpandIndexChange: Function;
  allExercises: any[];
}

const Routine = (props: Props) => {
  const [viewRoutine, setViewRoutine] = useState(false);
  const [exerciseTypes, setExerciseTypes] = useState<any[]>([]);
  const [r, setR] = useState(props.routine);
  const { exercises } = r;

  const handleChangeExerciseValue = (i: number, value: number) => {
    setR({
      ...r,
      exercises: r.exercises.map((e, index) =>
        i !== index ? e : { ...e, value }
      ),
    });
  };

  const handleChangeExercisePosition = (i: number, move: number) => {
    const moveExercise = r.exercises[i];
    const newExercises = r.exercises.slice();
    newExercises.splice(i, 1);
    newExercises.splice(i + move, 0, moveExercise);

    setR({ ...r, exercises: newExercises });
  };

  const handleDeleteExercise = (i: number) =>
    setR({
      ...r,
      exercises: r.exercises.filter((e, index) => i !== index),
    });

  const handleChangeFormat = (e: any) => {
    const newFormat = props.formats.find((f) => f.id === e.target.value);
    setR({
      ...r,
      format: newFormat,
      timeToComplete: estimateTime(newFormat, exercises),
    });
  };

  const handleAddType = (e: any) => {
    setR({
      ...r,
      exercises: [
        ...exercises,
        {
          id: uuidv4(),
          name: e.name,
          category: e.category,
          areas: e.areas,
          unit: e.unit,
          value: 10,
        },
      ],
    });
  };

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    const newWorkout = {
      ...oldWorkout,
      routines: oldWorkout.routines?.map((routine: any, index: number) =>
        index !== props.i ? routine : r
      ) || [r],
    };
    saveWorkout(newWorkout);
    // eslint-disable-next-line
  }, [r]);

  useEffect(() => {
    document.getElementById("routine-name")?.focus();
    const oldWorkout = getOldWorkout();
    const defaultTypes = [...bodyWeight, ...freeWeight, ...machine];
    setExerciseTypes(oldWorkout.exercises || defaultTypes);
  }, []);

  return viewRoutine ? (
    <ViewRoutine
      {...props}
      routine={r}
      onHideRoutine={() => setViewRoutine(false)}
      onChangeValue={handleChangeExerciseValue}
      allExercises={props.allExercises}
      onAdd={handleAddType}
    />
  ) : (
    <EditRoutine
      {...props}
      routine={r}
      onViewRoutine={() => setViewRoutine(true)}
      exerciseTypes={exerciseTypes}
      onChangeFormat={handleChangeFormat}
      onChangeValue={handleChangeExerciseValue}
      onChangePosition={handleChangeExercisePosition}
      onDelete={handleDeleteExercise}
      onAdd={handleAddType}
    />
  );
};

export default Routine;
