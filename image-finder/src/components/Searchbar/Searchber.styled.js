import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  spacing,
  colors: {
    accentColor,
    reverseColor,
    primaryColor,
    boxShadow,
    backroundColorSerchbar,
    placeholderColor,
  },
  transition,
} = theme;

export const SearchbarHdr = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${spacing(16)};
  padding-right: ${spacing(6)};
  padding-left: ${spacing(6)};
  padding-top: ${spacing(3)};
  padding-bottom: ${spacing(3)};
  border-radius: ${spacing(1)};
  color: ${primaryColor};
  background-color: ${backroundColorSerchbar};
  box-shadow: ${boxShadow};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${spacing(150)};
  background-color: ${reverseColor};
  border-radius: ${spacing(1)};
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: ${spacing(10)};
  height: ${spacing(8)};
  border: 0;
  opacity: 0.5;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  transition: opacity ${transition}, background-color ${transition};

  &:hover {
    opacity: 1;
    background-color: ${accentColor};
  }
`;

export const SerchFormButtonLabel = styled.span`
  padding: ${spacing(1)};
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  color: inherit;
  font: inherit;
  border: none;
  outline: none;
  padding-left: ${spacing(2)};
  padding-right: ${spacing(1)};

  &::placeholder {
    color: ${placeholderColor};
  }
`;
