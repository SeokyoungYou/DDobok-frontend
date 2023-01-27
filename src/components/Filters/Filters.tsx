import React from "react";
import styled from "styled-components";
import {
  GI_COLORS_ARRAY,
  GI_PRICES_ARRAY,
} from "../../constants/api-constants";
import FilterComponent from "./FilterComponent";

const Filters: React.FC = () => {
  return (
    <FiltersWrapper>
      <FilterComponent title="색상" filterItems={GI_COLORS_ARRAY} />
      <FilterComponent title="가격" filterItems={GI_PRICES_ARRAY} />
    </FiltersWrapper>
  );
};

export default Filters;

const FiltersWrapper = styled.div`
  width: 100%;
`;
