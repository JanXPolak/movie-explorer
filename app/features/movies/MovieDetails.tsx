import { IMovie } from "@/app/types/types";
import MovieActions from "./MovieActions";

interface Props {
  movie: IMovie;
}

const MovieDetails = ({ movie }: Props) => {
  return (
    <div className="relative flex min-h-screen items-end px-8 pb-16">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm text-gray-400">{movie.genre}</p>
        <h2 className="text-4xl font-bold md:text-6xl">{movie.title}</h2>
        <p className="mt-4 text-gray-300">{movie.date}</p>
        <p className="mt-6 max-w-xl text-gray-300">{movie.description}</p>
        <MovieActions movie={movie} />
      </div>
    </div>
  );
};

export default MovieDetails;
