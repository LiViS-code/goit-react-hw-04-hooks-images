import PropTypes from "prop-types";
import { LoadMoreBtn } from "./Button.styled";
export default function Button({ incrementPage }) {
  return <LoadMoreBtn onClick={incrementPage}>Load More</LoadMoreBtn>;
}

Button.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};
