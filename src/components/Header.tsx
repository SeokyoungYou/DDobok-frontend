import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <TitleWrapper>
      <Title>DDobok</Title>
      <DescriptionWrapper>
        <DescriptionTitle>또복. </DescriptionTitle>
        <Description>당신에게 맞는 도복을 찾아보세요.</Description>
      </DescriptionWrapper>
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
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 2px;
`;
const DescriptionWrapper = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const DescriptionTitle = styled.span``;
const Description = styled.span`
  color: ${(props) => props.theme.textLight};
`;
