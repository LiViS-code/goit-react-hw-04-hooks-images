import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";

export default function ImageGallery({
  request,
  page,
  updStatePicture,
  isShownLoading,
  handleError,
  onModal,
}) {
  const handleClick = (e) => {
    if (!e.target.dataset.large) return;
    onModal(e.target.dataset.large);
  };

  return (
    <GalleryList onClick={handleClick}>
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

ImageGallery.propTypes = {
  request: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  updStatePicture: PropTypes.func.isRequired,
  isShownLoading: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  onModal: PropTypes.func.isRequired,
};
