import React from "react";
import styled from "styled-components";
import Calendar, { WorkoutDot } from "./Calendar";

const getUnique = (arr: any) =>
  Array.from(
    new Set(arr.map((e: any) => e.values.map((d: any) => d.date)).flat())
  ).filter(Boolean);

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

  const yearsum = routines
    .map((r: any) => {
      const now = new Date();
      const workoutDots = getUnique(r.exercises);
      const filteredDots = workoutDots.filter(
        (w: any) => new Date(w) > new Date(now.getFullYear(), 0, 0)
      );
      if (filteredDots.length === 0) return null;
      return (
        <Dots>
          {filteredDots.map((w) => (
            <WorkoutDot bgColor={r.color} />
          ))}
        </Dots>
      );
    })
    .filter(Boolean);
  return yearsum.length === 0 ? null : (
    <Wrapper>
      <Calendar dates={workoutDates} />
      <YearSum>
        <Label>Workouts this year</Label>
        {yearsum}
      </YearSum>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const YearSum = styled.div`
  background-color: #000;
  border-radius: 6px;
  padding: 0 10px 10px;
`;
const Label = styled.label`
  color: #666;
  font-size: 14px;
  font-weight: 700;
`;
const Dots = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 4px;
  margin-top: 4px;
`;
export default WorkoutHistory;
