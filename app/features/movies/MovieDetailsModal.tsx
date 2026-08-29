import { IMovie } from "@/app/types/types";
import MovieDetails from "./MovieDetails";
import { useContext } from "react";
import { MovieDetailsContext } from "@/app/context/MovieDetailsContext";

interface Props {
  movie: IMovie;
}

const MovieDetailsModal = ({ movie }: Props) => {
  const { setSelectedMovie } = useContext(MovieDetailsContext);

  return (
    <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto bg-black text-white">
      <img
        src={movie.img}
        alt=""
        className="fixed inset-0 h-full w-full object-cover opacity-30"
      />

      <div className="fixed inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

      <button
        type="button"
        onClick={() => setSelectedMovie(null)}
        aria-label="Close movie details"
        className="absolute right-6 top-6 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/60 text-2xl text-white transition hover:bg-white hover:text-black"
      >
        ×
      </button>

      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieDetailsModal;