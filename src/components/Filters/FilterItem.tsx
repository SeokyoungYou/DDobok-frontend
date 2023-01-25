import React from "react";
import styled from "styled-components";

interface IFilterItem {
  item: string;
}

const FilterItem: React.FC<IFilterItem> = ({ item }) => {
  return (
    <Wrapper>
      <input type="checkbox" />
      <span>{item}</span>
    </Wrapper>
  );
};

export default FilterItem;

const Wrapper = styled.div`
  display: flex;
`;
