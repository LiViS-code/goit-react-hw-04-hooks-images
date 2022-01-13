import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";

class ImageGallery extends Component {
  static propTypes = {
    request: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    updStatePicture: PropTypes.func.isRequired,
    isShownLoading: PropTypes.func.isRequired,
    handleError: PropTypes.func.isRequired,
    onModal: PropTypes.func.isRequired,
  };

  handleClick = (e) => {
    if (!e.target.dataset.large) return;
    this.props.onModal(e.target.dataset.large);
  };

  render() {
    const { request, page, updStatePicture, isShownLoading, handleError } =
      this.props;

    return (
      <GalleryList onClick={this.handleClick}>
        <ImageGalleryItem
          request={request}
          page={page}
          updStatePicture={updStatePicture}
          isShownLoading={isShownLoading}
          handleError={handleError}
        />
      </GalleryList>
    );
  }
}

export default ImageGallery;
