import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CacheApiServer } from "../../api/CacheApiServer";
import { Brand, Gi } from "../../type/types";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { numberWithCommas } from "../../utlis/util-fn";

interface IGiItem {
  gi: Gi;
}

const GiItem: React.FC<IGiItem> = ({ gi }) => {
  const [brand, setBrand] = useState<Brand>({} as Brand);

  useEffect(() => {
    loadBrand();
  }, []);

  const loadBrand = async () => {
    const result = await CacheApiServer.getBrandById(gi.brand);
    setBrand(result);
  };

  return (
    <Wrapper>
      <BrandInfos>
        <IconLink target="_blank" href={brand.link_store}>
          <BrandTitle>{brand.name}</BrandTitle>
          <FontAwesomeIcon icon={faHome} />
        </IconLink>
        <IconLink target="_blank" href={brand.link_sns}>
          <FontAwesomeIcon icon={faInstagram} />
        </IconLink>
      </BrandInfos>
      <GiInfos>
        <GiAnchor target="_blank" href={gi.link_store}>
          <GiImg src={gi.photo} alt="gi-image" />
          <GiTitle>{gi.name}</GiTitle>
        </GiAnchor>
        <GiPrice>{numberWithCommas(gi.price)} 원</GiPrice>
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
const BrandTitle = styled.span`
  margin-right: 5px;
  font-weight: 400;
`;
const GiImg = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 5px;
`;
const IconLink = styled.a`
  /* font-size: 18px; */
`;

const GiInfos = styled.div`
  display: flex;
  flex-direction: column;
`;
const GiAnchor = styled.a``;
const GiTitle = styled.span`
  font-weight: 500;
`;
const GiPrice = styled.span``;
