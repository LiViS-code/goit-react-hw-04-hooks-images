import { useState } from "react";
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

export default function Searchbar({ onSubmit }) {
  const [request, setRequest] = useState("");

  const handleRequestChange = (e) => {
    setRequest(e.target.value.toLowerCase());
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();

    setRequest(request.trim());

    if (request === "") {
      toastMsg("Enter some kind of request", "warn");
      return;
    }

    onSubmit(request);
    setRequest("");
  };

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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
