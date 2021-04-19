import React, { useContext } from "react";
import { SearchContext } from "../context/Context";

const SearchList = () => {
  const { movieArray, handleMovieSelected } = useContext(SearchContext);

  function showMovieList() {
    return movieArray.map((item, i) => {
      return (
        <li key={i} onClick={() => handleMovieSelected(item)}>
          <img src={item.Poster} alt='movie poster' />
          {item.Title}
        </li>
      );
    });
  }

  return <ul className='results'>{showMovieList()}</ul>;
};

export default SearchList;
