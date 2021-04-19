import React, { useContext } from "react";
import { MovieContext } from "../context/Context";
import MovieDetails from "./MovieDetails";
import "./MovieData.css";

const MovieData = () => {
  const value = useContext(MovieContext);
  return value ? <MovieDetails /> : <div>Search some movies!</div>;
};

export default MovieData;
