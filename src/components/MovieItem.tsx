import React from 'react';

interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }


export const MovieItem = (props: Movie) => {
    return (
        <div>
        <img width="100px" height="100px" style={{padding: "20px"}} src={props.Poster}></img>
        <div style={{paddingBottom: "10px"}} >
            {props.Title} - {props.Year}
        </div>
        </div>
    );
}
