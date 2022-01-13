import React, { Component } from "react";
import PropTypes from "prop-types";
import { LoadMoreBtn } from "./Button.styled";

class Button extends Component {
  static propTypes = {
    incrementPage: PropTypes.func.isRequired,
  };

  handleClick = () => {
    this.props.incrementPage();
  };

  render() {
    return <LoadMoreBtn onClick={this.handleClick}>Load More</LoadMoreBtn>;
  }
}

export default Button;
