import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CacheApiServer } from "../../api/CacheApiServer";
import { GI_COLORS } from "../../constants/api-constants";
import { Gi, Gis } from "../../type/types";
import GiItem from "./GiItem";

const GiItems: React.FC = () => {
  const [gis, setGis] = useState<Gis>([] as Gis);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // const result = await CacheApiServer.getGisByQuery(GI_COLORS.BLACK);
    // setGis(result);
  };
  return (
    <Wrapper>
      {gis.length === 0 ? (
        <span>로딩중...</span>
      ) : (
        <>
          <Title>상품: {gis.length} 건</Title>
          <GiItemsWrapper>
            {gis.map((item) => (
              <GiItem item={item} key={item.id} />
            ))}
          </GiItemsWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default GiItems;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
const GiItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 10px;
  padding-bottom: 50px;
`;

const Title = styled.h1``;
