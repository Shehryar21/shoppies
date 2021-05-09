import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import {MovieItem} from "../components/MovieItem"

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export const Movies = () => {
  const [searchVal, setSearchVal] = useState("");

  const [movies, setMovies] = useState<Movie[] | undefined>();


  const onRequestSearchHandler = () => {
    const apiUrl = `http://www.omdbapi.com/?s=${searchVal}&apikey=f939c0a3&type=movie`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
          console.log(data.Search)
          setMovies(data.Search)
      });
    
  };


  return (
    <div>
      <SearchBar
        value={searchVal}
        onChange={(newValue) => setSearchVal(newValue)}
        onRequestSearch={onRequestSearchHandler}
      />
      {movies && movies.map((movie) => {
        return (
          <MovieItem {...movie}/>
        );
      })}
    </div>
  );
};
