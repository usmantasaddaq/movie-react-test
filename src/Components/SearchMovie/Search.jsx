import React from "react";
import axios from "axios";
import { api_key, api_domain } from "../Services/ApiData";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@material-ui/core/TextField";
import { SearchContainer, ButtonIconStyle } from "./SearchStyle";

function Search({ onSearchResults, searchText, setSearchText }) {
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    if (searchText) {
      axios
        .get(
          `${api_domain}/search/movie?api_key=${api_key}&query=${searchText}`
        )
        .then((response) => {
          onSearchResults(
            response.data.results
              .filter((e) =>
                e.original_title.toLowerCase().includes(searchText)
              )
              .sort(
                (a, b) => new Date(b.release_date) - new Date(a.release_date)
              )
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div style={SearchContainer}>
      <TextField
        label="Search movies"
        variant="outlined"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <div style={ButtonIconStyle}>
        
        <SearchIcon />
      </div>
    </div>
  );
}
export default Search;
