import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { CacheApiServer } from "../../api/CacheApiServer";
import { querySelector } from "../../store/atom";
import { Gis } from "../../type/types";
import GiItem from "./GiItem";

const GiItems: React.FC = () => {
  const queries = useRecoilValue(querySelector);
  const [gis, setGis] = useState<Gis>([] as Gis);

  const loadData = useCallback(async () => {
    let results: Gis = [];

    const promises = queries.map(async (query) => {
      const result = await CacheApiServer.getGisByQuery(query);
      results.push(...result);
    });

    await Promise.all(promises);

    setGis(results);
  }, [queries]);

  useEffect(() => {
    loadData();
  }, [queries, loadData]);

  return (
    <>
      {gis.length === 0 ? (
        <span>결과가 없습니다.</span>
      ) : (
        <Wrapper>
          <Title>상품: {gis.length} 건</Title>
          <GiItemsWrapper>
            {gis.map((gi) => (
              <GiItem gi={gi} key={gi.id} />
            ))}
          </GiItemsWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default GiItems;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const GiItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
  padding-bottom: 50px;
`;

const Title = styled.h1``;
