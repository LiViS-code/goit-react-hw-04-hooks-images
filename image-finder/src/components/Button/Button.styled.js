import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  spacing,
  colors: {
    primaryColor,
    reverseColor,
    backroundColorSerchbar,
    accentColor,
    boxShadowBtn,
  },
  transition,
  fonts: { size, lh, family },
} = theme;

export const LoadMoreBtn = styled.button`
  padding: ${spacing(2)} ${spacing(4)};
  margin: 0 auto;
  display: block;
  min-width: 180px;
  font-family: ${family};
  font-size: ${size};
  line-height: ${lh};
  font-style: normal;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: 0;
  border-radius: ${spacing(1)};
  color: ${reverseColor};
  box-shadow: ${boxShadowBtn};
  background-color: ${backroundColorSerchbar};
  transition: background-color ${transition}, color ${transition};

  &:hover,
  &:focus {
    color: ${primaryColor};
    background-color: ${accentColor};
  }
`;
