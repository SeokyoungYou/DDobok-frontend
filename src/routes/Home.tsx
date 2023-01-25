import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Contents />
    </>
  );
};

export default Home;

const Contents = styled.div`
  height: 90%;
  background-color: ${(props) => props.theme.bgDark};
`;
