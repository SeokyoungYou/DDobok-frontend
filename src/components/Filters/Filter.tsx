import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FILTER,
  FILTER_BG_COLOR,
  FILTER_TEXT_COLOR,
} from "../../constants/app-constants";
import FilterItem from "./FilterItem";

type ISelectedFilter = string[];
interface IFilter {
  filterItems: Array<string>;
  title: string;
}

const Filter: React.FC<IFilter> = ({ title, filterItems }) => {
  const [deselectedFilter, _] = useState(
    new Array(filterItems.length).fill(FILTER.DESELECTED)
  );
  const [selectedFilter, setSelectedFilter] =
    useState<ISelectedFilter>(deselectedFilter);

  useEffect(() => {
    setSelectedFilter(getInitialFilter());
  }, []);

  const getInitialFilter = () => {
    // Only "All" filter selected
    const newFilter = [...deselectedFilter];
    newFilter[0] = FILTER.SELECTED;
    return newFilter;
  };

  const toggleSelect = (isSelected: string) => {
    return isSelected === FILTER.SELECTED ? FILTER.DESELECTED : FILTER.SELECTED;
  };

  const isAllSelectedOrAllDeselected = (countSelected: number) => {
    const filterLength = deselectedFilter.length - 1;
    return countSelected === filterLength || countSelected === 0;
  };

  const isInitializeFilter = (allFilter: ISelectedFilter) => {
    const countSelected = allFilter
      .slice(1)
      .filter((filterItem) => filterItem === FILTER.SELECTED).length;

    return isAllSelectedOrAllDeselected(countSelected) ? true : false;
  };

  const updateFilterByIndex = (index: number) => {
    setSelectedFilter((prevFilter) => {
      const newFilter = [...prevFilter];
      newFilter[0] = FILTER.DESELECTED;
      newFilter[index] = toggleSelect(newFilter[index]);

      if (isInitializeFilter(newFilter)) {
        return getInitialFilter();
      }

      return newFilter;
    });
  };

  const onClickItem = (index: number) => {
    if (index === 0) {
      setSelectedFilter(getInitialFilter());
    } else {
      updateFilterByIndex(index);
    }
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Items>
        {filterItems.map((item, index) => {
          return (
            <ItemWrapper
              key={item}
              onClick={onClickItem.bind(this, index)}
              bgColor={FILTER_BG_COLOR[selectedFilter[index]]}
              textColor={FILTER_TEXT_COLOR[selectedFilter[index]]}
            >
              <span>{item}</span>
            </ItemWrapper>
          );
        })}
      </Items>
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  width: 50px;
`;

const Items = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

interface ItemWrapperProps {
  bgColor: string;
  textColor: string;
}
const ItemWrapper = styled.div<ItemWrapperProps>`
  /* width: 50px; */
  padding: 0px 15px;
  height: 28px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  cursor: pointer;
`;
