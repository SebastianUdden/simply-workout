import React from "react";
import styled from "styled-components";
import Calendar, { WorkoutDot } from "./Calendar";

const getUnique = (arr: any) =>
  Array.from(
    new Set(arr.map((e: any) => e.values.map((d: any) => d.date)).flat())
  );

interface Props {
  routines: any;
}

const WorkoutHistory = ({ routines }: Props) => {
  const workoutDates = routines
    .map((r: any) =>
      getUnique(r.exercises).map((d) => ({
        date: d,
        name: r.name,
        color: r.color,
      }))
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
      {routines.map((r: any) => (
        <YearSum>
          {getUnique(r.exercises).map((e) => (
            <WorkoutDot bgColor={r.color} />
          ))}
        </YearSum>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const YearSum = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 4px;
  margin-bottom: 4px;
`;
export default WorkoutHistory;
