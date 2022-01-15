import PropTypes from "prop-types";
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({ pictures, elemToScroll, perPage }) {
  return (
    <>
      {pictures.map(({ id, largeImageURL, webformatURL, tags }, idx, array) => (
        <GalleryItem key={id}>
          <GalleryItemImage
            src={webformatURL}
            alt={tags}
            data-large={largeImageURL}
            ref={idx === array.length - perPage ? elemToScroll : null}
          />
        </GalleryItem>
      ))}
    </>
  );
}

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array.isRequired,
};
