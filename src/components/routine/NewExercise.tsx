import styled from "styled-components";
import { Label } from "../Common";
import Modal from "../Modal";
import SearchExercises from "../SearchExercises";

interface Props {
  onHideNewExercise: Function;
  exercises: any[];
  onAdd: Function;
}

const NewExercise = ({ onHideNewExercise, exercises, onAdd }: Props) => {
  const handleAdd = (e: any) => {
    onHideNewExercise();
    onAdd(e);
  };

  return (
    <Modal onClose={onHideNewExercise} bgColor="#222">
      <Content>
        <Label>Add exercise</Label>
        <SearchExercises
          exercises={exercises}
          onSelect={handleAdd}
          maxHeight={true}
        />
        <br />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-height: 100vh;
`;

export default NewExercise;
