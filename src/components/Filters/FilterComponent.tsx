import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Filter } from "../../class/Filter";
import {
  FILTER_BG_COLOR,
  FILTER_TEXT_COLOR,
} from "../../constants/app-constants";
import { queryState } from "../../store/atom";
import { getQueriesByTitle } from "../../utlis/query-fn";

export type ISelectedFilter = string[];
export type ITitle = {
  KOR: string;
  ENG: string;
};

interface IFilterComponent {
  filterItems: Array<string>;
  title: ITitle;
}

const FilterComponent: React.FC<IFilterComponent> = ({
  title,
  filterItems,
}) => {
  const [filterInstance] = useState(new Filter(filterItems.length));

  const setQueryAtom = useSetRecoilState(queryState[title.ENG]);
  const [selectedFilter, setSelectedFilter] = useState<ISelectedFilter>(
    filterInstance.initialFilter
  );

  const postQueryToAtom = (filter: ISelectedFilter) => {
    const newQueries = getQueriesByTitle(title.ENG, filter);
    setQueryAtom(newQueries);
  };

  const onClickItem = (index: number) => {
    setSelectedFilter((prev) => {
      const prevFilter = [...prev];
      const newFilter = filterInstance.getNewFilter(prevFilter, index);
      postQueryToAtom(newFilter);
      return newFilter;
    });
  };

  return (
    <Wrapper>
      <Title>{title.KOR}</Title>
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
