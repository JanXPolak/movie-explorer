import useMovies from "@/app/hooks/useMovies";
import ListMovies from "../list/ListMovies";
import SearchInput from "../search/SearchInput";
import { useState } from "react";
import SearchResult from "../search/SearchResult";

const MoviesPage = () => {
  const { movies, isLoading, isError } = useMovies();
  const [searchQuery, setSearchQuery] = useState("");
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
      {searchQuery === "" ? (
        <ListMovies movies={movies} />
      ) : (
        <SearchResult searchQuery={searchQuery} movies={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
