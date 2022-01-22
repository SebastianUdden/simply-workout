import { useState } from "react";
import { Input, List } from "./Common";
import { ExerciseProps } from "./routine/EditExercise";
import SimpleExercise from "./SimpleExercise";

interface Props {
  exercises: ExerciseProps[];
  onSelect?: Function;
  onDelete?: Function;
}

const bySortString = (a: any, b: any) => {
  if (a.sortString > b.sortString) return 1;
  if (a.sortString < b.sortString) return -1;
  return 0;
};

const SearchExercises = ({ exercises, onSelect, onDelete }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const q = searchQuery.toLowerCase();
  const filteredExercises = exercises.filter(
    (e: any) =>
      e.name.toLowerCase().includes(q) ||
      e.category.toLowerCase().includes(q) ||
      e.unit.toLowerCase().includes(q) ||
      e.areas?.some((a: string[]) => a[0].includes(q) || a[1].includes(q))
  );
  return (
    <>
      <Input
        value={searchQuery}
        onChange={(e: any) => setSearchQuery(e.target.value)}
      />

      <List capitalize={true}>
        {filteredExercises
          .map((e) => ({
            ...e,
            sortString: `${e.category} - ${e.name}`,
          }))
          .sort(bySortString)
          .map((e) => (
            <SimpleExercise
              exercise={e}
              onSelect={onSelect}
              onDelete={onDelete}
            />
          ))}
      </List>
    </>
  );
};

export default SearchExercises;
