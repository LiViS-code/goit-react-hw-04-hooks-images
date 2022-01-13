import React, { Component } from "react";
import { Container, Title, Logo, NotFound } from "./App.styled";
import logo from "./img/logo.png";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import LoaderBox from "./components/Loader/LoaderBox";
import notFound from "./img/notfound.png";
import Modal from "./components/Modal/Modal";
class App extends Component {
  perPage = 12;

  state = {
    request: "",
    pictures: [],
    page: 1,
    maxPageCount: 1,
    loading: false,
    error: "",
    ShownModal: false,
    largePictureSRC: "",
  };

  handleSubmit = (request) => {
    if (this.state.error) {
      this.setState({ error: "", request, page: 1 });
    } else {
      this.setState({ request, page: 1 });
    }
  };

  updStatePicture = (pictures, total) => {
    this.setState({ pictures, maxPageCount: Math.ceil(total / this.perPage) });
  };

  incrementPage = () => {
    const nextPage = this.state.page + 1;
    if (nextPage <= this.state.maxPageCount) {
      this.setState({ page: nextPage });
      return;
    }
  };

  isShownLoading = (loading) => {
    this.setState({ loading });
  };

  handleError = (error) => {
    this.setState({ error });
  };

  onModal = (src) => {
    this.setState({ ShownModal: true, largePictureSRC: src });
  };

  closeModal = (ShownModal) => {
    if (ShownModal) {
      this.setState({ ShownModal: !ShownModal });
    }
  };

  componentDidUpdate = (_, prevState) => {
    const { pictures } = this.state;

    if (prevState.pictures.length < pictures.length) {
      this.scrollImage();
    }
  };

  scrollImage = () => {
    const {
      state: { pictures },
      perPage,
    } = this;
    const refGalleryItem = document.querySelectorAll("img[data-large]");

    if (pictures.length > perPage) {
      refGalleryItem[refGalleryItem.length - perPage].scrollIntoView({
        block: "start",
        behavior: "smooth",
      });

      // move it down 100 pixels because top header sticker overlaps
      window.scrollBy(0, -100);
    }
  };

  render() {
    const {
      handleSubmit,
      updStatePicture,
      incrementPage,
      isShownLoading,
      handleError,
      onModal,
      closeModal,
      state: {
        request,
        page,
        pictures,
        maxPageCount,
        loading,
        error,
        ShownModal,
        largePictureSRC,
      },
    } = this;
    const isBtnShown = pictures.length && page < maxPageCount ? true : false;

    return (
      <Container>
        <Title>
          <Logo src={logo} alt="logo" width="50px" />
          Image Finder
        </Title>

        <Searchbar onSubmit={handleSubmit} />

        {error && <NotFound src={notFound} alt="Images not found!" />}

        <ImageGallery
          request={request}
          page={page}
          updStatePicture={updStatePicture}
          isShownLoading={isShownLoading}
          handleError={handleError}
          onModal={onModal}
        />

        {ShownModal && (
          <Modal largePictureSRC={largePictureSRC} closeModal={closeModal} />
        )}

        {loading && <LoaderBox loading={loading} />}

        {isBtnShown && <Button incrementPage={incrementPage} />}
      </Container>
    );
  }
}

export default App;
