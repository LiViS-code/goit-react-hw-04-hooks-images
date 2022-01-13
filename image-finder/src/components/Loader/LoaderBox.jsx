import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container, Wrapper } from "./LoaderBox.styled";
import { theme } from "../../constants/Theme";

export default class LoaderBox extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
  };

  render() {
    const { loading } = this.props;
    const {
      colors: { accentColor },
    } = theme;

    return (
      <Container>
        <Wrapper>
          <Loader
            type="ThreeDots"
            color={accentColor}
            height={100}
            width={150}
            timeout={3000}
            visible={loading}
          />
        </Wrapper>
      </Container>
    );
  }
}
