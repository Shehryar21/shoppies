import React from 'react';

interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }

const handleNominate = () => {
    console.log()
}

export const MovieItem = (props: Movie) => {
    return (
        <div>
            <img src={props.Poster}></img>
            {props.Title} {props.Year}
            <button onClick={handleNominate}>Nominate</button>
        </div>
    );
}
