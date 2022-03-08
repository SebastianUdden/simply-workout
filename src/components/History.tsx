import { useEffect, useState } from "react";
import styled from "styled-components";
import { Close } from "./Close";
import { ExerciseValue } from "./routine/EditExercise";

const FIVE_YEARS = "5 years";
const ONE_YEAR = "1 year";
const SIX_MONTHS = "6 months";
const LATEST = "Latest";

const getDateXDaysAgo = (numOfDays: number, date: Date) => {
  const daysAgo: Date = new Date(date.getTime());
  daysAgo.setDate(date.getDate() - numOfDays);
  return daysAgo;
};

const removePreviousDates = (arr: any, target: any) => {
  let targetDate: any = new Date(target);
  return arr.filter(
    (e: any) => Number(targetDate) - Number(new Date(e.date)) < 0
  );
};

const getFilteredEntries = (entries: ExerciseValue[], span: string) => {
  let e = entries.slice();
  const size = 20;
  const now: Date = new Date();
  if (span === LATEST) {
    const filteredEntries =
      e.length > size ? e.slice(e.length - size, e.length) : e;
    return filteredEntries;
  }
  if (span === SIX_MONTHS) {
    e = removePreviousDates(e, getDateXDaysAgo(182, now));
  } else if (span === ONE_YEAR) {
    e = removePreviousDates(e, getDateXDaysAgo(365, now));
  } else if (span === FIVE_YEARS) {
    e = removePreviousDates(e, getDateXDaysAgo(1825, now));
  }
  const count = e.length;
  if (count > size) {
    const removeN = count / size;
    e = e.filter((entry, i) => (i + 1) % Math.floor(removeN) === 0);
  }

  const filteredEntries =
    e.length > size ? e.slice(e.length - size, e.length) : e;
  return filteredEntries;
};

interface Props {
  title: string;
  values: ExerciseValue[];
  unit: string;
  onClose: () => void;
}

const History = ({ title, values, unit, onClose }: Props) => {
  const [show, setShow] = useState(false);
  const [span, setSpan] = useState(LATEST);
  const [selected, setSelected] = useState(values[values.length - 1]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 1000);
  };
  const handleSpanChange = (value: string) => {
    setSpan(value);
    const e = getFilteredEntries(values, value);
    setSelected(e[e.length - 1]);
  };

  useEffect(() => {
    setShow(true);
  }, []);

  const maxValue = Math.max(...values.map((e) => e.value));
  const filteredEntries = getFilteredEntries(values, span);

  return (
    <Wrapper show={show} isButton={false}>
      <Close onClick={() => handleClose()}>&times;</Close>
      <Title>{title}</Title>
      <Container>
        {selected && (
          <Row>
            <DateText>{selected.date}:</DateText>
            <Value>
              {Math.round(selected.value)} {unit}
            </Value>
          </Row>
        )}
        <Graph>
          {filteredEntries.map((e: any) => (
            <Bar
              onClick={() => setSelected(e)}
              isSelected={e.date === selected.date}
              value={e.value}
              percentage={Math.floor((e.value / maxValue) * 100)}
            />
          ))}
        </Graph>
        <ButtonRow>
          <Button
            isSelected={span === FIVE_YEARS}
            onClick={() => handleSpanChange(FIVE_YEARS)}
          >
            {FIVE_YEARS}
          </Button>
          <Button
            isSelected={span === ONE_YEAR}
            onClick={() => handleSpanChange(ONE_YEAR)}
          >
            {ONE_YEAR}
          </Button>{" "}
          <Button
            isSelected={span === SIX_MONTHS}
            onClick={() => handleSpanChange(SIX_MONTHS)}
          >
            {SIX_MONTHS}
          </Button>{" "}
          <Button
            isSelected={span === LATEST}
            onClick={() => handleSpanChange(LATEST)}
          >
            {LATEST}
          </Button>
        </ButtonRow>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ show?: boolean; isButton: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  color: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 700ms ease, background-color 10000ms ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 15px;
  ${(p) =>
    p.show ? "transform: translateX(0);" : "transform: translateX(100%);"}
  ${(p) =>
    p.isButton &&
    `
    cursor: pointer;
    background-color: #fff;
  `}
`;

const Title = styled.h1`
  align-self: flex-start;
  margin: 10px 0 10px;
  color: white;
  text-align: left;
  font-size: 30px;
  text-transform: capitalize;
`;
const Container = styled.div`
  box-sizing: border-box;
  border: 2px solid magenta;
  padding: 15px;
  height: 75%;
  width: 100%;
`;
const Bar = styled.div<{
  isSelected: boolean;
  value: number;
  percentage: number;
}>`
  background-color: #890089;
  width: 100%;
  height: ${(p) => p.percentage}%;
  margin: 1px;
  border-radius: 6px 6px 0 0;
  cursor: pointer;
  transition: height 800ms ease;
  :hover {
    background-color: #ff00ff;
  }
  :active {
    background-color: #ff00ff;
  }
  ${(p) =>
    p.isSelected &&
    `
    background-color: #ff00ff;
  `}
`;
const Graph = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 82%;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6%;
  margin: -5px 0 15px;
`;
const DateText = styled.span``;
const Value = styled.strong`
  margin: 0 5px;
  padding: 3px 5px;
  border-radius: 6px;
  background-color: magenta;
`;
const ButtonRow = styled(Row)`
  margin: 5px 0;
  height: 11%;
`;
const Button = styled.button<{ isSelected: boolean }>`
  height: 90%;
  width: 100%;
  color: inherit;
  border-radius: 6px;
  margin-right: 4px;
  border: none;
  background-color: #890089;
  :last-of-type {
    margin: 0;
  }
  :hover {
    background-color: #ff00ff;
  }
  :active {
    background-color: #ff00ff;
  }
  ${(p) =>
    p.isSelected &&
    `
    background-color: #ff00ff;
  `}
`;

export default History;
