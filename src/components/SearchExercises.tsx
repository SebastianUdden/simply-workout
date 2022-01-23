import { useState } from "react";
import styled from "styled-components";
import { Input, List } from "./Common";
import { ExerciseProps } from "./routine/EditExercise";
import SimpleExercise, { Area } from "./SimpleExercise";

interface Props {
  exercises: ExerciseProps[];
  onSelect?: Function;
  onDelete?: Function;
  maxHeight?: boolean;
}

const bySortString = (a: any, b: any) => {
  if (a.sortString > b.sortString) return 1;
  if (a.sortString < b.sortString) return -1;
  return 0;
};

const SearchExercises = ({
  exercises,
  onSelect,
  onDelete,
  maxHeight = true,
}: Props) => {
  const [simpleView, setSimpleView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<any[]>([]);
  const q = searchQuery.toLowerCase();
  const queries = [...q.split(" "), ...filters];

  const filteredExercises = exercises.filter((e: any) => {
    return queries.every(
      (q) =>
        e.name.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.unit.toLowerCase().includes(q) ||
        e.areas?.some((a: string[]) => a[0].includes(q) || a[1].includes(q))
    );
  });

  const handleAreaClick = (t: string) => {
    console.log({ t });
    console.log({ filters });
    if (filters.some((f) => f === t)) {
      setFilters([...filters.filter((f) => f !== t)]);
      return;
    }
    setFilters([...filters.filter((f) => f !== t), t]);
  };

  const tags = Array.from(
    new Set(
      exercises
        .map((e) => e.areas?.map((a) => a[simpleView ? 0 : 1]))
        .flat()
        .filter(Boolean)
    )
  );

  return (
    <>
      <Input
        id="filter-exercises"
        type="search"
        value={searchQuery}
        onChange={(e: any) => setSearchQuery(e.target.value)}
      />
      {tags?.length > 0 && (
        <Tags>
          <SimpleView onClick={() => setSimpleView(!simpleView)}>
            {simpleView ? "Show muscle areas" : "Show muscle names"}
          </SimpleView>
          {tags.sort().map((t: any) => (
            <Area
              selected={filters.some((f) => f === t)}
              onClick={() => handleAreaClick(t)}
            >
              {t}
            </Area>
          ))}
        </Tags>
      )}
      <List capitalize={true} noMaxHeight={!maxHeight}>
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

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const SimpleView = styled(Area)`
  padding: 10px;
  background-color: #000;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;

export default SearchExercises;
