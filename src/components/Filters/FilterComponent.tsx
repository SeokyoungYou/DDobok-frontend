import React, { useState } from "react";
import styled from "styled-components";
import { Filter, IFilter } from "../../class/Filter";
import {
  FILTER_BG_COLOR,
  FILTER_TEXT_COLOR,
} from "../../constants/app-constants";

export type ISelectedFilter = string[];
interface IFilterComponent {
  filterItems: Array<string>;
  title: string;
}

const FilterComponent: React.FC<IFilterComponent> = ({
  title,
  filterItems,
}) => {
  const [filterInstance, _] = useState<IFilter>(new Filter(filterItems.length));
  const [selectedFilter, setSelectedFilter] = useState<ISelectedFilter>(
    filterInstance.initialFilter
  );

  const onClickItem = (index: number) => {
    setSelectedFilter((prev) => {
      const prevFilter = [...prev];
      return filterInstance.getNewFilter(prevFilter, index);
    });
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

export default FilterComponent;

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
