import { useState } from "react";
import { SearchContext, MovieContext } from "./context/Context";
import Search from "./Search/Search";
import MovieData from "./MovieData/MovieData";

import "./App.css";

let OMDB_API = "e739e00a";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movieArray, setMovieArray] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [movieSelected, setMovieSelected] = useState(null);
  /* searchValue is the initial value. setSearchValue is the new updated value. */

  async function handleOnChange(value) {
    setSearchValue(value);

    const response = await fetch(
      `http://omdbapi.com/?apikey=${OMDB_API}&s=${value}`
    );
    /* Getting data that is typed in. Get response from API */

    const data = await response.json();
    /* Getting back the movie list data */

    setMovieArray(data.Search || []);
    setIsSearching(true);
    /* Setting so that if there is no title match push to empty array */
  }

  const contextValueObj = {
    movieSearchTitle: searchValue,
    handleOnChange,
    movieArray,
    isSearching,
    handleMovieSelected,
    /* Creating an object and populating it with the searchValue and the handleOnChange FN */
  };

  function handleMovieSelected(usrInput) {
    setMovieSelected(
      usrInput
    ); /* setting movieSelected state to equal the usrInput */
    setIsSearching(false);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <SearchContext.Provider value={contextValueObj}>
        <Search />
      </SearchContext.Provider>
      <MovieContext.Provider value={movieSelected}>
        <MovieData />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
