import React, { useState, useEffect } from "react";
import axios from "axios";
import { api_key, api_domain } from "../Services/ApiData";
import Grid from "@mui/material/Grid";
import Search from "../SearchMovie/Search";
import MovieCard from "../MovieCard/MovieCard";
import MovieModal from "../Modal/MovieModel";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(`${api_domain}/discover/movie?api_key=${api_key}`)
      .then((response) =>
        setMovies(
          response.data.results.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          )
        )
      )
      .catch((error) => console.log(error));
  }, []);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };
  const handleModalClose = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <div>
        <h1>🎥 My Movies App</h1>
        {/* Search form */}
        <form>
          <Search
            onSearchResults={(results) => setMovies(results)}
            setSearchText={setSearchText}
            searchText={searchText}
          />
        </form>

        <hr></hr>
        <Grid container spacing={2}>
          {movies?.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
              <MovieCard movie={movie} onClick={() => handleCardClick(movie)} />
            </Grid>
          ))}
        </Grid>
        <MovieModal movie={selectedMovie} onClose={handleModalClose} />
      </div>
    </>
  );
};

export default Movie;
