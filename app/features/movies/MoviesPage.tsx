import useMovies from "@/app/hooks/useMovies";
import ListMovies from "../list/ListMovies";
import SearchInput from "../search/SearchInput";
import { useState } from "react";
import SearchResults from "../search/SearchResults";

const MoviesPage = () => {
  const { movies, isLoading, isError } = useMovies();
  const [searchQuery, setSearchQuery] = useState("");
  const isSearchQueryEmpty = searchQuery === ""
  if (isLoading) return <p>Loading data...</p>;
  if (isError) return <p>An error has occured while fetching data.</p>;
  if (movies.length === 0) {
    return (
      <div>
        <p>There are no movies.</p>
      </div>
    );
  }
  return (
    <div>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isSearchQueryEmpty ? (
        <ListMovies movies={movies} />
      ) : (
        <SearchResults searchQuery={searchQuery} movies={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
