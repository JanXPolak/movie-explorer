import useMovies from "@/app/hooks/useMovies";
import ListMovies from "../list/ListMovies";
import SearchInput from "../search/SearchInput";
import { useState } from "react";
import SearchResults from "../search/SearchResults";
import { IMovie } from "@/app/types/types";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieDetailsContext } from "@/app/context/MovieDetailsContext";

const MoviesPage = () => {
  const { movies, isLoading, isError } = useMovies();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const isSearchQueryEmpty = searchQuery === "";
  if (isLoading) return <p>Loading data...</p>;
  if (isError) return <p>An error has occured while fetching data.</p>;
  if (movies.length === 0) return <p>There are no movies.</p>;
  return (
    <div>
      <MovieDetailsContext value={{ selectedMovie, setSelectedMovie }}>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {isSearchQueryEmpty ? (
          <ListMovies movies={movies} />
        ) : (
          <SearchResults searchQuery={searchQuery} movies={movies} />
        )}
        {selectedMovie && <MovieDetailsModal movie={selectedMovie} />}
      </MovieDetailsContext>
    </div>
  );
};

export default MoviesPage;
