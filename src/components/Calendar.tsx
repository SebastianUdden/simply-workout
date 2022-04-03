import { useEffect, useState } from "react";
import styled from "styled-components";
import { getNewDate } from "../utils";

const months = [
  "January",
  "Februay",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const weeks = [days, days, days, days, days, days].flat();

const format = (number: number) => {
  if (number === 1) return `${number}st`;
  if (number === 2) return `${number}nd`;
  if (number === 3) return `${number}rd`;
  return `${number}th`;
};

const getFirstAndLastDate = (selectedDate?: string) => {
  const date = selectedDate ? new Date(selectedDate) : new Date();
  const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return { firstDate, lastDate };
};

const getDate = (
  i: number,
  firstIndex: number,
  lastIndex: number,
  daysInLastMonth: number
) => {
  if (i > lastIndex) return { month: 1, date: i - lastIndex };
  if (i >= firstIndex) return { month: 0, date: i - firstIndex + 1 };
  return { month: -1, date: daysInLastMonth - firstIndex + i + 1 };
};

const getSelectedWorkouts = (date: string, dates: any) => {
  const selectedDate = dates.find((dt: any) => dt.date === date);
  return selectedDate || null;
};

const getWorkoutsThisDay = (d: any, m: any, dates: any) => {
  return dates.map((dt: any) => {
    const newDate = new Date(dt.date);
    return d.date === newDate.getDate() && m === newDate.getMonth()
      ? dt.activities.map((a: any) => (
          <WorkoutDot key={a.color} bgColor={a.color} />
        ))
      : null;
  });
};

interface DateActivity {
  date: string;
  activities: string[];
}

interface Props {
  dates: DateActivity[];
  onShowSelectedDay: Function;
}

const Calendar = ({ dates, onShowSelectedDay }: Props) => {
  const [selectedDate, setSelectedDate] = useState(getNewDate());
  const [datetime, setDatetime] = useState<any>();

  const handleDateChange = (date: any, value: number) => {
    const now = new Date(date);
    now.setDate(1);
    now.setMonth(now.getMonth() + value);
    setSelectedDate(getNewDate(now.toDateString()));
  };

  useEffect(() => {
    const dt = new Date(selectedDate);
    const lastDt = new Date(selectedDate);
    lastDt.setMonth(lastDt.getMonth() - 1);
    const year = dt.getFullYear();
    const month = dt.getMonth();
    const formatedMonth = months[dt.getMonth()];
    const date = dt.getDate();
    const formatedDate = format(date);
    const daysInMonth = new Date(year, dt.getMonth() + 1, 0).getDate();
    const daysInLastMonth = new Date(
      lastDt.getFullYear(),
      lastDt.getMonth() + 1,
      0
    ).getDate();
    const { firstDate } = getFirstAndLastDate(selectedDate);
    const nr = firstDate.getDay();
    const firstDay = days[nr === 0 ? 6 : nr - 1];
    const firstIndex = weeks.findIndex((f, i) => f === firstDay && i !== 0);
    const lastIndex = firstIndex + daysInMonth - 1;

    setDatetime({
      year,
      month,
      date,
      formatedMonth,
      formatedDate,
      firstIndex,
      lastIndex,
      daysInLastMonth,
    });
  }, [selectedDate]);

  const handleSelectDay = (date: string) => {
    const selectedDay = getSelectedWorkouts(date, dates);
    setSelectedDate(date);
    onShowSelectedDay(selectedDay);
  };

  if (!datetime) return null;
  const { year, month, formatedMonth, firstIndex, lastIndex, daysInLastMonth } =
    datetime;

  const weekEl = weeks.map((weekDay, i) => {
    const d = getDate(i, firstIndex, lastIndex, daysInLastMonth);
    const m = month + d.month;
    const dt = new Date();
    dt.setMonth(m);
    dt.setDate(d.date);
    const newDate = getNewDate(dt.toDateString());
    const isSelected = newDate === selectedDate && d.month === 0;
    return (
      <Day
        onClick={() => handleSelectDay(newDate)}
        isToday={d.date === new Date().getDate() && m === new Date().getMonth()}
        thisMonth={d.month === 0}
        isSelected={isSelected}
      >
        <Number>{d.date}</Number>
        {getWorkoutsThisDay(d, m, dates)}
      </Day>
    );
  });

  return (
    <Wrapper>
      <Title>
        <Left onClick={() => handleDateChange(selectedDate, -1)}>&larr;</Left>
        {year} {formatedMonth}
        <Right onClick={() => handleDateChange(selectedDate, 1)}>&rarr;</Right>
      </Title>
      <Week>
        {days.map((d) => (
          <D key={d}>{d}</D>
        ))}
      </Week>
      <Month>{weekEl}</Month>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 10px;
  * {
    box-sizing: border-box;
  }
`;
const Title = styled.p`
  margin: 0 0 5px;
  font-size: 25px;
  font-weight: 800;
  height: 10%;
  display: flex;
  align-items: center;
`;
const Month = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
`;
const Week = styled.div`
  height: 16.7%;
  display: flex;
`;
const Day = styled.div<{
  isToday: boolean;
  isSelected?: boolean;
  thisMonth: boolean;
}>`
  display: flex;
  align-items: flex-end;
  position: relative;
  background-color: #222;
  color: #111;
  border: 1px solid #1c1c1c;
  height: 100%;
  width: 14.28%;
  height: 16.7%;
  min-height: 60px;
  font-weight: 800;
  padding: 5px;
  user-select: none;
  cursor: pointer;
  :hover {
    background-color: #111;
    color: #fff;
  }
  :active {
    background-color: #000;
  }
  ${(p) =>
    p.thisMonth &&
    `
        background-color: #333;
        color: #eee;
        border: 1px solid #222;
        `}
  ${(p) =>
    p.isSelected &&
    `
        background-color: #000;
        color: #eee;
  `}
  ${(p) =>
    p.isToday &&
    `
    border: 1px solid magenta;
  `}
`;
const D = styled.div`
  height: 100%;
  width: 14.28%;
  height: 16.7%;
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  min-height: 10px;
  background-color: inherit;
  color: #666;
  border: none;
  font-size: 16px;
  padding: 5px 0;
`;
const Number = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 16px;
`;
export const WorkoutDot = styled.div<{ bgColor?: string }>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${(p) => p.bgColor || "inherit"};
  margin-right: 3px;
  margin-bottom: 3px;
`;
const Arrow = styled.button`
  background-color: inherit;
  border: none;
  color: inherit;
  font-size: 25px;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
  user-select: none;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.5;
  }
`;
const Left = styled(Arrow)``;
const Right = styled(Arrow)``;

export default Calendar;
