import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Backdrop, Picture } from "./Modal.styled";
import LoaderBox from "../Loader/LoaderBox";

export default function Modal({ largePictureSRC, closeModal }) {
  const [shownLoad, setShownLoad] = useState(false);

  useEffect(() => {
    setShownLoad(true);
    const escFunction = (e) => {
      if (e.keyCode === 27) {
        closeModal(true);
      }
    };
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [closeModal]);

  const handleClick = (e) => {
    if (e.target.tagName === "DIV") return closeModal(true);
  };

  return (
    <Backdrop onClick={handleClick}>
      {shownLoad && <LoaderBox loading={shownLoad} />}
      <Picture
        src={largePictureSRC}
        width="100%"
        onLoad={() => setShownLoad(false)}
      />
    </Backdrop>
  );
}

Modal.propTypes = {
  largePictureSRC: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
