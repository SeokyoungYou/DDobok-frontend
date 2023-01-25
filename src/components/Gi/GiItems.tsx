import React from "react";
import styled from "styled-components";
import GiItem from "./GiItem";

const gis = [
  {
    id: 1,
    name: "Korea X Special Edition Starlyte Blackou",
    photo: "https://ddobok.onrender.com/media/gi_photos/Hyperfly_Starlyte.png",
    link_store:
      "https://hyperfly.co.kr/product/korea-x-special-edition-starlyte-blackout/292/category/1/display/3/",
    price: 185000,
    priority: 0,
    color: "Black",
    brand: 1,
  },
  {
    id: 2,
    name: "Korea X Special Edition Starlyte Blackou",
    photo: "https://ddobok.onrender.com/media/gi_photos/Hyperfly_Starlyte.png",
    link_store:
      "https://hyperfly.co.kr/product/korea-x-special-edition-starlyte-blackout/292/category/1/display/3/",
    price: 185000,
    priority: 0,
    color: "Black",
    brand: 1,
  },
  {
    id: 3,
    name: "Korea X Special Edition Starlyte Blackou",
    photo: "https://ddobok.onrender.com/media/gi_photos/Hyperfly_Starlyte.png",
    link_store:
      "https://hyperfly.co.kr/product/korea-x-special-edition-starlyte-blackout/292/category/1/display/3/",
    price: 185000,
    priority: 0,
    color: "Black",
    brand: 1,
  },
  {
    id: 4,
    name: "Korea X Special Edition Starlyte Blackou",
    photo: "https://ddobok.onrender.com/media/gi_photos/Hyperfly_Starlyte.png",
    link_store:
      "https://hyperfly.co.kr/product/korea-x-special-edition-starlyte-blackout/292/category/1/display/3/",
    price: 185000,
    priority: 0,
    color: "Black",
    brand: 1,
  },
  {
    id: 8,
    name: "Korea X Special Edition Starlyte Blackou",
    photo: "https://ddobok.onrender.com/media/gi_photos/Hyperfly_Starlyte.png",
    link_store:
      "https://hyperfly.co.kr/product/korea-x-special-edition-starlyte-blackout/292/category/1/display/3/",
    price: 185000,
    priority: 0,
    color: "Black",
    brand: 1,
  },
  {
    id: 5,
    name: "Korea X Special Edition Starlyte Blackou",
    photo: "https://ddobok.onrender.com/media/gi_photos/Hyperfly_Starlyte.png",
    link_store:
      "https://hyperfly.co.kr/product/korea-x-special-edition-starlyte-blackout/292/category/1/display/3/",
    price: 185000,
    priority: 0,
    color: "Black",
    brand: 1,
  },
  {
    id: 6,
    name: "Korea X Special Edition Starlyte Blackou",
    photo: "https://ddobok.onrender.com/media/gi_photos/Hyperfly_Starlyte.png",
    link_store:
      "https://hyperfly.co.kr/product/korea-x-special-edition-starlyte-blackout/292/category/1/display/3/",
    price: 185000,
    priority: 0,
    color: "Black",
    brand: 1,
  },
];
const GiItems: React.FC = () => {
  return (
    <Wrapper>
      <Title>상품: {gis.length} 건</Title>
      <GiItemsWrapper>
        {gis.map((item) => (
          <GiItem item={item} key={item.id} />
        ))}
      </GiItemsWrapper>
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
