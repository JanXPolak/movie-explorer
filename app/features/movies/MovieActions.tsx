import { IMovie } from "@/app/types/types";

interface Props {
  movie: IMovie;
}

const MovieActions = ({ movie }: Props) => {
  return (
    <div className="mt-6 flex gap-3">
      <button
        type="button"
        aria-label="Add to liked"
        className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-200"
      >
        👍 {movie.likes}
      </button>
      <button
        type="button"
        aria-label="Add to disliked"
        className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10"
      >
        👎 {movie.dislikes}
      </button>
      <button
        type="button"
        aria-label="Add to favorites"
        className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10"
      >
        ♡
      </button>
    </div>
  );
};

export default MovieActions;
