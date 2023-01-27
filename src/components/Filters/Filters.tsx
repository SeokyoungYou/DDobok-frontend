import React from "react";
import styled from "styled-components";
import {
  FILTER_COLOR,
  FILTER_PRICE,
  GI_COLORS_ARRAY,
  GI_PRICES_ARRAY,
} from "../../constants/api-constants";
import FilterComponent from "./FilterComponent";

const Filters: React.FC = () => {
  return (
    <FiltersWrapper>
      <FilterComponent title={FILTER_COLOR} filterItems={GI_COLORS_ARRAY} />
      <FilterComponent title={FILTER_PRICE} filterItems={GI_PRICES_ARRAY} />
    </FiltersWrapper>
  );
};

export default Filters;

const FiltersWrapper = styled.div`
  width: 100%;
`;
