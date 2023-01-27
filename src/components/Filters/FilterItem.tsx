import React, { useState } from "react";
import styled from "styled-components";

interface IFilterItem {
  item: string;
  isSelected: boolean;
  setSelectedFilter: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const FilterItem: React.FC<IFilterItem> = ({
  item,
  isSelected,
  setSelectedFilter,
}) => {
  return (
    <Wrapper>
      <span>{item}</span>
    </Wrapper>
  );
};

export default FilterItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Checkbox = styled.input``;
