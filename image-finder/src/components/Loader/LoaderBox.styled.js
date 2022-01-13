import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  colors: { backgroundColorBackdrop },
} = theme;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  background-color: ${backgroundColorBackdrop};
`;

export const Wrapper = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate3d(-50%, 50%, 0);
  z-index: 7;
`;
