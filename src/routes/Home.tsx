import React from "react";
import styled from "styled-components";
import Filter from "../components/Filters/Filter";
import Footer from "../components/Footer";
import GiItems from "../components/Gi/GiItems";
import Header from "../components/Header";
import { GI_COLORS_ARRAY, GI_PRICES_ARRAY } from "../constants/api-constants";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ContentsWrapper>
        <FiltersWrapper>
          <Filter title="색상" filterItems={GI_COLORS_ARRAY} />
          <Filter title="가격" filterItems={GI_PRICES_ARRAY} />
        </FiltersWrapper>
        <GiItems />
      </ContentsWrapper>
      <Footer />
    </>
  );
};

export default Home;

const ContentsWrapper = styled.div`
  height: 83%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgLight};
  padding: 10px;
`;
const FiltersWrapper = styled.div`
  width: 100%;
  /* height: 100px; */
`;
