import React from "react";
import styled from "styled-components";
import FilterItem from "./FilterItem";

const items = ["전체", "검", "흰", "파", "기타"];
const Filter: React.FC = () => {
  return (
    <Wrapper>
      <Title>색상</Title>
      {items.map((item) => (
        <FilterItem item={item} key={item} />
      ))}
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.h1``;
