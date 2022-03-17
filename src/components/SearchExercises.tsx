import { useState } from "react";
import styled from "styled-components";
import { exerciseNames } from "../constants/exerciseTypes";
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

  const handleAreaClick = (t: string, clear?: boolean) => {
    if (!clear && filters.some((f) => f === t)) {
      setFilters([...filters.filter((f) => f !== t)]);
      return;
    }
    if (!clear) {
      setFilters([...filters.filter((f) => f !== t), t]);
      return;
    }
    setFilters([t]);
  };

  const tags = Array.from(
    new Set(
      exercises
        .map((e) => e.areas)
        .flat()
        .filter(Boolean)
        .map((e) => e?.toString())
    )
  ).map((t: any) => t.split(","));

  return (
    <>
      <Input
        id="filter-exercises"
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={(e: any) => setSearchQuery(e.target.value)}
      />
      {exerciseNames && (
        <Tags>
          {exerciseNames.map((en) => (
            <Area
              selected={filters.some((f) => f === en)}
              onClick={() => handleAreaClick(en, true)}
            >
              {en}
            </Area>
          ))}
        </Tags>
      )}
      {tags?.length > 0 && (
        <Tags>
          <SimpleView onClick={() => setSimpleView(!simpleView)}>
            {simpleView ? "Show muscle areas" : "Show muscle names"}
          </SimpleView>
          {tags.map((t: any) => (
            <Area
              selected={filters.some((f) => f === t[0])}
              onClick={() => handleAreaClick(t[0])}
            >
              {t[simpleView ? 0 : 1]}
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
  margin-bottom: 15px;
`;

const SimpleView = styled(Area)`
  padding: 6px 10px;
  background-color: #000;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;

export default SearchExercises;
