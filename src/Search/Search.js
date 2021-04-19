import React, { useContext } from "react";
import { SearchContext } from "../context/Context";
import SearchList from "./SearchList";
import "./Search.css";

const Search = () => {
  // let fromAppComponent = useContext(SearchContext);
  // console.log(fromAppComponent);

  const { handleOnChange, movieSearchTitle, isSearching } = useContext(
    SearchContext
  );

  return (
    <div className='search'>
      <input
        type='search'
        name='movie-Search'
        value={movieSearchTitle}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      {movieSearchTitle !== "" && isSearching && <SearchList />}
    </div>
  );
};

export default Search;
