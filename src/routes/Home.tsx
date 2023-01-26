import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { getGis } from "../api/axios-fn";
import Filter from "../components/Filters/Filter";
import Footer from "../components/Footer";
import GiItems from "../components/Gi/GiItems";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ContentsWrapper>
        <FiltersWrapper>
          <Filter />
          <Filter />
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
  height: 100px;
`;
