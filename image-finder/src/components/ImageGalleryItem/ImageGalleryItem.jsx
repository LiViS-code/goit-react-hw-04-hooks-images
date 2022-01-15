import PropTypes from "prop-types";
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({ pictures }) {
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

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array.isRequired,
};
