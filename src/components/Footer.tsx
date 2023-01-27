import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <span>Contact us 📧 great.ddobok@gmail.com</span>
      <footer>Copyright &copy; 2023 DDobok</footer>
    </FooterWrapper>
  );
};
export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.bgLight};
`;
