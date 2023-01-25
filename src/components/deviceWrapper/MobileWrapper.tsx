import React from "react";
import styled from "styled-components";

interface MobileWrapperProps {
  children: React.ReactNode;
}

const MobileWrapper: React.FC<MobileWrapperProps> = ({ children }) => {
  return <Background>{children}</Background>;
};

export default MobileWrapper;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bgDark};
`;
