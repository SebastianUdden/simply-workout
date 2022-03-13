import React from "react";
import styled from "styled-components";
import Calendar from "./Calendar";

interface Props {
  routines: any;
}

const WorkoutHistory = ({ routines }: Props) => {
  const workoutDates = routines
    .map((r: any) =>
      Array.from(
        new Set(
          r.exercises.map((e: any) => e.values.map((d: any) => d.date)).flat()
        )
      ).map((d) => ({ date: d, name: r.name, color: r.color }))
    )
    .flat()
    .reduce((results: any, item: any) => {
      const current = results.find((i: any) => i.date === item.date);
      if (current) {
        current.activities = [
          ...current.activities,
          { name: item.name, color: item.color },
        ];
      } else {
        results.push({
          date: item.date,
          activities: [{ name: item.name, color: item.color }],
        });
      }
      return results;
    }, []);
  return (
    <Wrapper>
      <Calendar dates={workoutDates} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default WorkoutHistory;
