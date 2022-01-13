import React, { Component } from "react";
import PropTypes from "prop-types";
import { FcSearch } from "react-icons/fc";
import toastMsg from "../../utils/toastMsg";
import {
  SearchbarHdr,
  SearchForm,
  SearchFormButton,
  SerchFormButtonLabel,
  SearchFormInput,
} from "./Searchber.styled";

class Searchbar extends Component {
  state = {
    request: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleRequestChange = (e) => {
    const request = e.target.value.toLowerCase();
    this.setState({ request });
  };

  handleRequestSubmit = (e) => {
    e.preventDefault();
    const { request } = this.state;

    if (request.trim() === "") {
      toastMsg("Enter some kind of request", "warn");
      return;
    }

    this.props.onSubmit(request.trim());
    this.setState({ request: "" });
  };

  render() {
    const {
      handleRequestSubmit,
      handleRequestChange,
      state: { request },
    } = this;
    return (
      <SearchbarHdr>
        <SearchForm onSubmit={handleRequestSubmit}>
          <SearchFormButton type="submit">
            <SerchFormButtonLabel>
              <FcSearch />
            </SerchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={request}
            onChange={handleRequestChange}
          />
        </SearchForm>
      </SearchbarHdr>
    );
  }
}

export default Searchbar;
