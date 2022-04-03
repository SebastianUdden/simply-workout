import styled from "styled-components";

const Program = ({ onRoutineClick, name, routines }: any) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <List>
        {routines.map((r: any) => (
          <li>
            Day {r.day}:{" "}
            <Button onClick={() => onRoutineClick(r)}>{r.routine.name}</Button>
          </li>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  margin-bottom: 20px;
  padding: 5px 20px 30px;
  border-radius: 6px;
`;
const Title = styled.strong`
  font-size: 16px;
  color: orange;
`;
const List = styled.ul`
  font-size: 16px;
  opacity: 0.7;
  margin: 0;
  padding: 5px 0 0 20px;
  li {
    margin-bottom: 3px;
    :nth-child(even) {
      opacity: 0.7;
    }
  }
`;
const Button = styled.button`
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  border-radius: 6px;
  padding: 5px 10px;
`;

export default Program;
