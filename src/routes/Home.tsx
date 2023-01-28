import React, { useRef } from "react";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import Filters from "../components/Filters/Filters";
import FloatingBtn from "../components/FloatingBtn";
import Footer from "../components/Footer";
import GiItems from "../components/Gi/GiItems";
import Header from "../components/Header";

const Home: React.FC = () => {
  const topScrollRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const scrollToTop = () => {
    topScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <RecoilRoot>
      <Header />
      <ContentsWrapper>
        <TopScrollPosition ref={topScrollRef} />
        <Filters />
        <GiItems />
        <FloatingBtn scrollToTop={scrollToTop} />
      </ContentsWrapper>
      <Footer />
    </RecoilRoot>
  );
};

export default Home;

const ContentsWrapper = styled.div`
  position: relative;
  height: 83%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* align-items: center; */
  overflow: scroll;
  background-color: ${(props) => props.theme.bgLight};
  padding: 10px;
`;

const TopScrollPosition = styled.div``;
