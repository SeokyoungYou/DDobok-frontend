import React from "react";
import styled from "styled-components";
import { Gi } from "../../type/types";

interface IGiItem {
  item: Gi;
}

const GiItem: React.FC<IGiItem> = ({ item }) => {
  return (
    <Wrapper>
      <BrandInfos>
        <BrandImg />
        {/* <BrandImg src={item.photo} alt="brand-logo-image" /> */}
        <BrandTitle target="_blank" href={item.link_store}>
          {item.brand}: Hyperfly
        </BrandTitle>
      </BrandInfos>
      <GiInfos>
        <GiAnchor target="_blank" href={item.link_store}>
          {/* <GiImg src={item.photo} alt="gi-image" /> */}
          <GiImg />
          <GiTitle>{item.name}</GiTitle>
        </GiAnchor>
        <GiPrice>{item.price} 원</GiPrice>
      </GiInfos>
    </Wrapper>
  );
};

export default GiItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 320px;
  gap: 5px;
`;
const BrandInfos = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
const BrandTitle = styled.a``;
// const BrandImg = styled.img``;
// const GiImg = styled.img``;
const BrandImg = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.pointBlue};
`;
const GiImg = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.pointRed};
  margin-bottom: 5px;
`;
const GiInfos = styled.div`
  display: flex;
  flex-direction: column;
`;
const GiAnchor = styled.a``;
const GiTitle = styled.span`
  font-weight: 400;
`;
const GiPrice = styled.span``;
