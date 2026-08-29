import { IMovie } from "@/app/types/types";

interface Props {
  movie: IMovie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="flex-none w-40 flex flex-col gap-2 snap-start">
      <img src={movie.img} className="rounded-2xl" />
      <p className="text-sm font-medium">{movie.title}</p>
      <p className="text-xs text-slate-400">
        {movie.date}, {movie.genre}
      </p>
    </div>
  );
};

export default MovieCard;
