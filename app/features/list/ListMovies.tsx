import { IMovie } from "@/app/types/types";

interface Props {
  movies: IMovie[];
}

const ListMovies = ({ movies }: Props) => {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <p key={movie.id}>
            {movie.id}. {movie.title}
          </p>
        );
      })}
    </div>
  );
};

export default ListMovies;
