import { IMovie } from "@/app/types/types";

interface Props {
  movies: IMovie[];
}
const MovieRow = ({ movies }: Props) => {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className="flex-none w-40 flex flex-col gap-2 snap-start"
          >
            <img src={movie.img} className="rounded-2xl" />
            <p className="text-sm font-medium">{movie.title}</p>
            <p className="text-xs text-slate-400">
              {movie.date}, {movie.genre}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieRow;
