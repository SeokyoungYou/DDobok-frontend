import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

interface IFloatingBtn {
  scrollToTop: () => void;
}
const FloatingBtn: React.FC<IFloatingBtn> = ({ scrollToTop }) => {
  return (
    <Wrapper onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </Wrapper>
  );
};

export default FloatingBtn;

const Wrapper = styled.button`
  position: fixed;
  bottom: 80px;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.pointBlue};
  color: white;
  cursor: pointer;
`;
