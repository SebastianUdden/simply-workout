import React from "react";
import styled from "styled-components";
import { Input } from "./Common";

interface Props {
  onChange: Function;
  searchQuery: string;
}

const Search = ({ onChange, searchQuery }: Props) => {
  return (
    <Wrapper>
      <Input value={searchQuery} onChange={(e) => onChange(e.target.value)} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Search;
