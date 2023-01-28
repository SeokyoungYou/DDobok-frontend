import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <TitleWrapper>
      <Title>DDobok</Title>
      <DescriptionWrapper></DescriptionWrapper>
    </TitleWrapper>
  );
};

export default Header;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.bgLight};
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 2px;
`;
const DescriptionWrapper = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.bgLight};
`;
