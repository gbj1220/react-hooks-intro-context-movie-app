import React, { useContext } from "react";
import { MovieContext } from "../context/Context";

const MovieDetails = () => {
  const { Poster, Title, Type, Year } = useContext(MovieContext);

  return (
    <div>
      <img src={Poster} alt='Movie Poster' />
      <h3 className='movie-info'>{Title}</h3>
      <div className='info-section'>
        <label>Type</label>
        <span>{Type}</span>
      </div>
      <div className='info-section'>
        <label>Year</label>
        <span>{Year}</span>
      </div>
    </div>
  );
};

export default MovieDetails;
