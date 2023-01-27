import React from "react";
import styled from "styled-components";
import Filters from "../components/Filters/Filters";
import Footer from "../components/Footer";
import GiItems from "../components/Gi/GiItems";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ContentsWrapper>
        <Filters />
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
