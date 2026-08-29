import { IMovie } from "@/app/types/types";
import MovieCard from "../movies/MovieCard";

interface Props {
  searchQuery: string;
  movies: IMovie[];
}

const SearchResult = ({ searchQuery, movies }: Props) => {
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex flex-wrap gap-4">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default SearchResult;
