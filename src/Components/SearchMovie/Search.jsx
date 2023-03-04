import { api_key, api_domain } from "../Services/ApiData";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import { SearchContainer, ButtonIconStyle } from "./SearchStyle";

function Search({ onSearchResults }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchButtonClick = () => {
    if (searchText) {
      axios
        .get(
          `${api_domain}/search/movie?api_key=${api_key}&query=${searchText}`
        )
        .then((response) => {
          onSearchResults(
            response.data.results.filter((e) =>
              e.original_title.toLowerCase().includes(searchText)
            )
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={SearchContainer}>
      <TextField
        label="Search movies"
        variant="outlined"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <div style={ButtonIconStyle}>
        <IconButton onClick={handleSearchButtonClick}>
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
}
export default Search;
