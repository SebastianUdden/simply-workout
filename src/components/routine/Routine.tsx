import { useEffect, useState } from "react";
import EditRoutine from "./EditRoutine";
import ViewRoutine from "./ViewRoutine";
import { estimateTime, getNewDate, getUnique } from "../../utils";
import { ExerciseValue } from "./EditExercise";

export interface RoutineProps {
  id: string;
  name: string;
  color: string;
  format: any;
  exerciseIds: any[];
  timeToComplete?: string;
  workouts: string[];
}

interface Props {
  routine: RoutineProps;
  i: number;
  formats: any[];
  expandIndex: number;
  onExpandIndexChange: Function;
  onUpdateRoutine: Function;
  exercises: any[];
  onUpdateExercises: Function;
  onDeleteRoutine: Function;
}

const Routine = ({ onUpdateRoutine, onUpdateExercises, ...props }: Props) => {
  const [viewRoutine, setViewRoutine] = useState(false);
  const [r, setR] = useState(props.routine);
  const [routineExercises, setRoutineExercises] = useState<any>([]);
  const { exerciseIds } = r;

  useEffect(() => {
    setRoutineExercises(
      exerciseIds.map((eid) => props.exercises.find(({ id }) => eid === id))
    );
  }, [exerciseIds, props.exercises]);

  const handleChangeExerciseValue = (id: string, value: ExerciseValue) => {
    const exercises = props.exercises.map((e: any) => {
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
    });
    onUpdateExercises(exercises);
    setR({
      ...r,
      workouts: getUnique([...r.workouts, getNewDate()])
        .map((entry: any) => entry?.toString() || false)
        .filter(Boolean),
    });
  };

  const handleChangeExercisePosition = (i: number, move: number) => {
    const moveExercise = r.exerciseIds[i];
    const newExerciseIds = r.exerciseIds.slice();
    newExerciseIds.splice(i, 1);
    newExerciseIds.splice(i + move, 0, moveExercise);

    setR({ ...r, exerciseIds: newExerciseIds });
  };

  const handleDeleteExercise = (i: number) =>
    setR({
      ...r,
      exerciseIds: exerciseIds.filter((e, index) => i !== index),
    });

  const handleChangeFormat = (e: any) => {
    const newFormat = props.formats.find((f) => f.id === e.target.value);
    setR({
      ...r,
      format: newFormat,
      timeToComplete: estimateTime(newFormat, routineExercises),
    });
  };

  const handleAddType = (id: string) => {
    setR({
      ...r,
      exerciseIds: [...exerciseIds, id],
    });
  };

  useEffect(() => {
    onUpdateRoutine(r);
    // eslint-disable-next-line
  }, [r]);

  useEffect(() => {
    document.getElementById("routine-name")?.focus();
  }, []);

  return (
    <>
      {viewRoutine && (
        <ViewRoutine
          {...props}
          routine={r}
          routineExercises={routineExercises}
          onHideRoutine={() => setViewRoutine(false)}
          onChangeValue={handleChangeExerciseValue}
          onAdd={handleAddType}
        />
      )}
      <EditRoutine
        {...props}
        routine={r}
        routineExercises={routineExercises}
        onViewRoutine={() => setViewRoutine(true)}
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
