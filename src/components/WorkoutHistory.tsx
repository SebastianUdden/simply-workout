import { useState } from "react";
import styled from "styled-components";
import Calendar, { WorkoutDot } from "./Calendar";
import { Button, Column } from "./Common";

interface Props {
  routines: any;
}

const WorkoutHistory = ({ routines }: Props) => {
  const [selectedDay, setSelectedDay] = useState<any>(null);
  const [expandYearSum, setExpandYearSum] = useState(false);
  const workoutDates = routines
    .map((r: any) =>
      r.workouts.map((d: string) => ({
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
      const workoutDots = r.workouts;
      const filteredDots = workoutDots.filter(
        (w: any) => new Date(w) > new Date(now.getFullYear(), 0, 0)
      );
      if (filteredDots.length === 0) return null;
      return (
        <Column>
          {expandYearSum && (
            <Row>
              <Title>{r.name}</Title>
            </Row>
          )}
          <Dots>
            {filteredDots.map(() => (
              <WorkoutDot bgColor={r.color} />
            ))}
          </Dots>
        </Column>
      );
    })
    .filter(Boolean);
  return yearsum.length === 0 ? null : (
    <Wrapper>
      <Calendar
        dates={workoutDates}
        onShowSelectedDay={(day: any) => setSelectedDay(day)}
      />
      <YearSum
        onClick={() => {
          setExpandYearSum(!expandYearSum);
          setSelectedDay(null);
        }}
      >
        {selectedDay ? (
          <>
            <Label>Workouts {selectedDay?.date}</Label>
            {selectedDay?.activities.map((a: any) => {
              return (
                <Column>
                  <Row>
                    <Title>{a.name}</Title>
                  </Row>
                  <Dots>
                    <WorkoutDot bgColor={a.color} />
                  </Dots>
                </Column>
              );
            })}
          </>
        ) : (
          <>
            <Label>Workouts this year</Label>
            {yearsum}
          </>
        )}
      </YearSum>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 30px;
`;
const YearSum = styled(Button)`
  background-color: #000;
  border-radius: 6px;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  :hover {
    opacity: 1;
    background-color: #0b0b0b;
  }
  :active {
    background-color: #000;
  }
`;
const Label = styled.label`
  color: #666;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
const Title = styled.strong`
  font-size: 14px;
`;
const Dots = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 4px;
  margin-top: 4px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
`;
export default WorkoutHistory;
