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

  console.log(gis);

  const loadData = async () => {
    const result = await CacheApiServer.getGisByQuery(GI_COLORS.BLACK);
    setGis(result);
    // const result = await fetch(
    //   "https://ddobok.onrender.com/api/v1/gis/?color=Black"
    // );
    // setGis(await result.json());
  };

  return (
    <Wrapper>
      {gis.length === 0 ? (
        <span>로딩중...</span>
      ) : (
        <>
          <Title>상품: {gis.length} 건</Title>
          <GiItemsWrapper>
            {gis.map((gi) => (
              <GiItem gi={gi} key={gi.id} />
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
