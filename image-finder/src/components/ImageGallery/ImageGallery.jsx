import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";

export default function ImageGallery({
  pictures,
  onModal,
  elemToScroll,
  perPage,
}) {
  const handleClick = (e) => {
    if (!e.target.dataset.large) return;
    onModal(e.target.dataset.large);
  };

  return (
    <GalleryList onClick={handleClick}>
      <ImageGalleryItem
        pictures={pictures}
        elemToScroll={elemToScroll}
        perPage={perPage}
      />
    </GalleryList>
  );
}

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onModal: PropTypes.func.isRequired,
};
