import React, { Component } from "react";
import PropTypes from "prop-types";
import { Backdrop, Picture } from "./Modal.styled";
import LoaderBox from "../Loader/LoaderBox";

export default class Modal extends Component {
  static propTypes = {
    largePictureSRC: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  state = {
    shownLoad: true,
    src: "",
  };

  handleClick = (e) => {
    if (e.target.tagName === "DIV") return this.props.closeModal(true);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction);
    this.setState({ src: this.props.largePictureSRC });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.src !== this.state.src) {
      setTimeout(() => {
        this.setState({ shownLoad: false });
      }, 300);
      return;
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction);
  }

  escFunction = (e) => {
    if (e.keyCode === 27) {
      this.props.closeModal(true);
    }
  };

  render() {
    const {
      handleClick,
      state: { shownLoad, src },
    } = this;

    return (
      <Backdrop onClick={handleClick}>
        {shownLoad && <LoaderBox loading={shownLoad} />}
        <Picture src={src} width="100%" />
      </Backdrop>
    );
  }
}
