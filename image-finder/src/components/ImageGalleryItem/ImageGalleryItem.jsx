import React, { Component } from "react";
import PropTypes from "prop-types";
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";
import getPictures from "../../utils/getPictures";
import toastMsg from "../../utils/toastMsg";
class ImageGalleryItem extends Component {
  static propTypes = {
    request: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    updStatePicture: PropTypes.func.isRequired,
    isShownLoading: PropTypes.func.isRequired,
    handleError: PropTypes.func.isRequired,
  };

  state = {
    pictures: [],
    error: "",
  };

  componentDidUpdate(prevProps) {
    const { request, page, updStatePicture, isShownLoading } = this.props;

    if (prevProps.request !== request || prevProps.page !== page) {
      isShownLoading(true);

      getPictures(request, page)
        .then((pic) => {
          if (pic.total === 0) {
            const error = `No results were found for "${request.toUpperCase()}"`;
            throw error;
          }

          if (prevProps.request === request) {
            this.setState((state) => {
              return { pictures: state.pictures.concat(pic.hits) };
            });
          } else {
            this.setState({ pictures: pic.hits });
          }

          updStatePicture(this.state.pictures, pic.total);

          this.serviceMessage(
            page,
            pic.total,
            this.state.pictures.length,
            request
          );
        })
        .catch((error) => {
          this.handleError(error);
        })
        .finally(() => {
          isShownLoading(false);
        });
    }
  }

  serviceMessage = (page, total, count, request) => {
    const { error } = this.state;

    if (error) {
      toastMsg(`Error: ${error}`, "error");
      this.setState({ error: "" });
      return;
    }

    if (page === 1) {
      toastMsg(`${total} "${request.toUpperCase()}" images found`, "success");
    } else {
      toastMsg(
        `Uploaded ${count} of ${total} "${request.toUpperCase()}" images`,
        "success"
      );
    }

    if (count === total) {
      setTimeout(() => {
        toastMsg(`No more images of "${request.toUpperCase()}" found`, "info");
      }, 1000);
    }
  };

  handleError = (error) => {
    this.setState({ error, pictures: [] });
    this.props.updStatePicture([], 0);
    this.props.handleError(error);
    this.serviceMessage();
  };

  render() {
    const { pictures } = this.state;

    return (
      <>
        {pictures.map(({ id, largeImageURL, webformatURL, tags }) => (
          <GalleryItem key={id}>
            <GalleryItemImage
              src={webformatURL}
              alt={tags}
              data-large={largeImageURL}
            />
          </GalleryItem>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
