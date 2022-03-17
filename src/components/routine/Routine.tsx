import { useEffect, useState } from "react";
import EditRoutine from "./EditRoutine";
import ViewRoutine from "./ViewRoutine";
import { exerciseTypes as defaultExerciseTypes } from "../../constants/exerciseTypes";
import { estimateTime, getOldWorkout, uuidv4 } from "../../utils";
import { ExerciseValue } from "./EditExercise";

export interface RoutineProps {
  id: string;
  name: string;
  color: string;
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
  onUpdateRoutine: Function;
  allExercises: any[];
  onDeleteRoutine: Function;
}

const Routine = ({ onUpdateRoutine, ...props }: Props) => {
  const [viewRoutine, setViewRoutine] = useState(false);
  const [exerciseTypes, setExerciseTypes] = useState<any[]>([]);
  const [r, setR] = useState(props.routine);
  const { exercises } = r;

  const handleChangeExerciseValue = (i: number, value: ExerciseValue) => {
    const exercises = r.exercises.map((e, index) => {
      let values = e.values.slice();
      const latest = e.values[e.values.length - 1];
      if (latest.date === value.date) {
        values.pop();
      }
      values.push(value);
      return i !== index ? e : { ...e, values };
    });
    setR({
      ...r,
      exercises,
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
          values: [{ date: undefined, value: 10 }],
        },
      ],
    });
  };

  useEffect(() => {
    onUpdateRoutine(r);
    // eslint-disable-next-line
  }, [r]);

  useEffect(() => {
    document.getElementById("routine-name")?.focus();
    const oldWorkout = getOldWorkout();
    setExerciseTypes(oldWorkout.exercises || defaultExerciseTypes);
  }, []);

  return (
    <>
      {viewRoutine && (
        <ViewRoutine
          {...props}
          routine={r}
          onHideRoutine={() => setViewRoutine(false)}
          onChangeValue={handleChangeExerciseValue}
          allExercises={props.allExercises}
          onAdd={handleAddType}
        />
      )}
      <EditRoutine
        {...props}
        routine={r}
        onViewRoutine={() => setViewRoutine(true)}
        exerciseTypes={exerciseTypes}
        onChangeFormat={handleChangeFormat}
        onChangeValue={handleChangeExerciseValue}
        onChangePosition={handleChangeExercisePosition}
        onDelete={handleDeleteExercise}
        onDeleteRoutine={props.onDeleteRoutine}
        onAdd={handleAddType}
      />
    </>
  );
};

export default Routine;
