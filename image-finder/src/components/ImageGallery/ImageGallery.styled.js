import styled from "styled-components";
import { theme } from "../../constants/Theme";

const { spacing } = theme;

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 24px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${spacing(4)};
  margin-top: 0;
  margin-bottom: ${spacing(4)};
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
