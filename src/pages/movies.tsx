import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import { MovieItem } from "../components/MovieItem";
import Grid from "@material-ui/core/Grid";

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export const Movies = () => {
  const [searchVal, setSearchVal] = useState("");

  const [movies, setMovies] = useState<Movie[]>([]);

  const [nominatedMovies, setNominatedMovies] = useState<Movie[]>([]);

  const onRequestSearchHandler = () => {
    const apiUrl = `http://www.omdbapi.com/?s=${searchVal}&apikey=f939c0a3&type=movie`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Search);
        setMovies(data.Search);
      });
  };

  const isMovieNominated = (id: string) => {
    return (
      nominatedMovies.some((movie) => movie.imdbID === id) ||
      nominatedMovies.length === 5
    );
  };

  return (
    <div style={{ padding: "20px" , backgroundColor: "#f5fffa"}}>
      <h1>Shoppies Movie Nominator</h1>
      <SearchBar
        value={searchVal}
        onChange={(newValue) => setSearchVal(newValue)}
        onRequestSearch={onRequestSearchHandler}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <h2>You have searched for: {searchVal}</h2>
          {movies.map((movie) => {
            return (
              <>
                <MovieItem {...movie} />
                <button
                  onClick={() => {
                    if (nominatedMovies.length === 4) {
                      alert(
                        "You have nominated 5 movies. You can not nominate more!!!"
                      );
                    }
                    setNominatedMovies([...nominatedMovies, movie]);
                  }}
                  disabled={isMovieNominated(movie.imdbID)}
                >
                  Nominate
                </button>
              </>
            );
          })}
        </Grid>

        <Grid item xs={12} sm={6}>
          <h2>Nominated</h2>

          {nominatedMovies.map((movie) => {
            return (
              <>
                <MovieItem {...movie} />
                <button
                  onClick={() =>
                    setNominatedMovies(
                      nominatedMovies.filter((m) => m.imdbID !== movie.imdbID)
                    )
                  }
                >
                  Remove
                </button>
              </>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};
