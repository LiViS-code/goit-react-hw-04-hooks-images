import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";

export default function ImageGallery({ pictures, onModal, elemToScroll }) {
  const handleClick = (e) => {
    if (!e.target.dataset.large) return;
    onModal(e.target.dataset.large);
  };

  return (
    <GalleryList onClick={handleClick}>
      <ImageGalleryItem pictures={pictures} elemToScroll={elemToScroll} />
    </GalleryList>
  );
}

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onModal: PropTypes.func.isRequired,
};
