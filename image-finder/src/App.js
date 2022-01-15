import { useState, useEffect, useRef } from "react";
import toastMsg from "./utils/toastMsg";
import { Container, Title, Logo, NotFound } from "./App.styled";
import logo from "./img/logo.png";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import LoaderBox from "./components/Loader/LoaderBox";
import notFound from "./img/notfound.png";
import Modal from "./components/Modal/Modal";
import getPictures from "./utils/getPictures";

export default function App() {
  const perPage = 12; // The number of displayed objects. Used also for correct auto scrolling
  const [request, setRequest] = useState("");
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPageCount, setMaxPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shownModal, setShownModal] = useState(false);
  const [largePictureSRC, setLargePictureSRC] = useState("");
  const countPictures = useRef(0);
  const elemToScroll = useRef(null);

  const onSubmit = (request) => {
    if (error) setError(null);
    setRequest(request.trim());
    setPage(1);
  };

  const incrementPage = () => {
    if (page + 1 <= maxPageCount) setPage(page + 1);
  };

  const onModal = (src) => {
    setShownModal(true);
    setLargePictureSRC(src);
  };

  const closeModal = (isShow) => {
    if (isShow) setShownModal(!isShow);
  };

  const isBtnShown = pictures.length && page < maxPageCount ? true : false;

  useEffect(() => {
    if (!pictures.length) return;

    if (pictures.length > perPage) {
      elemToScroll.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });

      // move it down 100 pixels because top header sticker overlaps
      window.scrollBy(0, -100);
    }
    countPictures.current = pictures.length;
  }, [pictures.length]);

  useEffect(() => {
    if (!request) return;

    setLoading(true);

    getPictures(request, page)
      .then((pic) => {
        if (pic.total === 0) {
          const error = `No results were found for "${request.toUpperCase()}"`;
          throw error;
        }

        if (page > 1) {
          setPictures((pictures) => [...pictures, ...pic.hits]);
        } else {
          setPictures([...pic.hits]);
        }

        setMaxPageCount(Math.ceil(pic.total / perPage));

        if (page === 1) {
          toastMsg(
            `${pic.total} "${request.toUpperCase()}" images found`,
            "success"
          );
        } else {
          toastMsg(
            `Uploaded ${countPictures.current} of ${
              pic.total
            } "${request.toUpperCase()}" images`,
            "success"
          );
        }
        if (countPictures.current === pic.total) {
          setTimeout(() => {
            toastMsg(
              `No more images of "${request.toUpperCase()}" found`,
              "info"
            );
          }, 1000);
        }
      })
      .catch((error) => {
        setError(error);
        setPictures([]);
        setMaxPageCount(1);
        toastMsg(`Error: ${error}`, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [request, page]);

  return (
    <Container>
      <Title>
        <Logo src={logo} alt="logo" width="50px" />
        Image Finder
      </Title>
      <Searchbar onSubmit={onSubmit} />
      {error && <NotFound src={notFound} alt="Images not found!" />}
      <ImageGallery
        pictures={pictures}
        onModal={onModal}
        elemToScroll={elemToScroll}
        perPage={perPage}
      />
      {shownModal && (
        <Modal largePictureSRC={largePictureSRC} closeModal={closeModal} />
      )}
      {loading && <LoaderBox loading={loading} />}
      {isBtnShown && <Button incrementPage={incrementPage} />}
    </Container>
  );
}
