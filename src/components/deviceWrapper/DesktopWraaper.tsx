import React from "react";
import styled from "styled-components";

interface DesktopWrapperProps {
  children: React.ReactNode;
}

const DesktopWrapper: React.FC<DesktopWrapperProps> = ({ children }) => {
  return (
    <Background>
      <VerticalVeiwWrapper>{children}</VerticalVeiwWrapper>
    </Background>
  );
};

export default DesktopWrapper;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.bgLight};
`;

const VerticalVeiwWrapper = styled.div`
  width: 500px;
  height: 100vh;
  background-color: ${(props) => props.theme.bgLight};
`;
