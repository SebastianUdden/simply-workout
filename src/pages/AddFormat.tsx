import { ChangeEventHandler, useEffect, useState } from "react";
import styled from "styled-components";
import { workoutFormats } from "../constants/formats";
import { getFormatString, getOldWorkout, saveWorkout, uuidv4 } from "../utils";
import {
  AddButton,
  Button,
  Column,
  DisplayName,
  Item,
  List,
  Row,
  Select,
} from "../components/Common";

export interface Format {
  id: string;
  sets: number;
  reps: number;
  rest: number;
  percentage: number;
}

const getNumberSeries = (count: number) => {
  let numberSeries = [];
  for (let i = 1; i <= count; i++) {
    numberSeries.push(i);
  }
  return numberSeries;
};

interface SelectionProps {
  label: string;
  handleChangeValue: ChangeEventHandler;
  defaultOption: string;
  value: number;
  options: any[];
}
const Selection = ({
  label,
  handleChangeValue,
  value,
  defaultOption,
  options,
}: SelectionProps) => (
  <>
    <Label>{label}</Label>
    <Select onChange={handleChangeValue} value={value}>
      <option>{defaultOption}</option>
      {options.map((o) => (
        <option>{o}</option>
      ))}
    </Select>
  </>
);

const AddFormat = () => {
  const [sets] = useState(getNumberSeries(20));
  const [reps] = useState(getNumberSeries(100));
  const [rest] = useState(getNumberSeries(180));
  const [percentage] = useState(getNumberSeries(100));
  const [formats, setFormats] = useState<any[]>([]);
  const [newFormat, setNewFormat] = useState<Format>({
    id: uuidv4(),
    sets: 0,
    reps: 0,
    rest: 0,
    percentage: 0,
  });

  const handleChangeSets = (e: any) => {
    if (e.target.value === "Sets") return;
    setNewFormat({ ...newFormat, sets: Number(e.target.value) });
  };
  const handleChangeReps = (e: any) => {
    if (e.target.value === "Reps") return;
    setNewFormat({ ...newFormat, reps: Number(e.target.value) });
  };
  const handleChangeRest = (e: any) => {
    if (e.target.value === "Reps") return;
    setNewFormat({ ...newFormat, rest: Number(e.target.value) });
  };
  const handleChangePercentage = (e: any) => {
    if (e.target.value === "% increase per workout") return;
    setNewFormat({ ...newFormat, percentage: Number(e.target.value) });
  };
  const handleAdd = () => {
    const newFormats = [...formats, newFormat];
    setFormats(newFormats);
    const el = document.getElementById("workout-name");
    if (!el) return;
    el.focus();
  };
  const handleDelete = (id: string) => {
    setFormats(formats.filter((f) => f.id !== id));
  };

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    setFormats(oldWorkout.formats || workoutFormats);
  }, []);

  useEffect(() => {
    const oldWorkout = getOldWorkout();
    const newWorkout = {
      ...oldWorkout,
      formats,
    };
    saveWorkout(newWorkout);
  }, [formats]);

  const alreadyExists = formats.find(
    ({ reps, sets, rest, percentage }) =>
      reps === newFormat.reps &&
      sets === newFormat.sets &&
      rest === newFormat.rest &&
      percentage === newFormat.percentage
  )
    ? true
    : false;

  return (
    <Wrapper>
      {formats.length !== 0 && (
        <>
          <Label>Current workout formats available</Label>
          <List>
            {formats.map((f) => (
              <Item onClick={() => setNewFormat(f)}>
                <Row>
                  <Column>
                    <Row>
                      {f.sets} sets * {f.reps} reps = {f.sets * f.reps} reps
                    </Row>
                    <Row>
                      {f.rest} sec rest, {f.percentage}% per workout
                    </Row>
                  </Column>
                  <Column>
                    <Button onClick={() => handleDelete(f.id)}>&times;</Button>
                  </Column>
                </Row>
              </Item>
            ))}
          </List>
        </>
      )}
      <Selection
        label="Set amount"
        handleChangeValue={handleChangeSets}
        value={newFormat.sets}
        defaultOption="Sets"
        options={sets}
      />
      <Selection
        label="Repetition amount"
        handleChangeValue={handleChangeReps}
        value={newFormat.reps}
        defaultOption="Reps"
        options={reps}
      />
      <Selection
        label="Seconds of rest between sets"
        handleChangeValue={handleChangeRest}
        value={newFormat.rest}
        defaultOption="Rest in seconds"
        options={rest}
      />
      <Selection
        label="Percentage increase/decrease"
        handleChangeValue={handleChangePercentage}
        value={newFormat.percentage}
        defaultOption="% change per workout"
        options={percentage}
      />
      {newFormat.sets !== 0 &&
        newFormat.reps !== 0 &&
        newFormat.rest !== 0 &&
        newFormat.percentage !== 0 && (
          <>
            <DisplayName>{getFormatString(newFormat)}</DisplayName>
            <AddButton onClick={() => handleAdd()} disabled={alreadyExists}>
              {alreadyExists ? "Workout format already exists!" : "Add format"}
            </AddButton>
          </>
        )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-weight: 800;
  margin: 20px 0 10px;
`;

export default AddFormat;
