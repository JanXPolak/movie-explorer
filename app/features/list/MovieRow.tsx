import { IMovie } from "@/app/types/types";
import MovieCard from "../movies/MovieCard";

interface Props {
  movies: IMovie[];
}
const MovieRow = ({ movies }: Props) => {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieRow;
