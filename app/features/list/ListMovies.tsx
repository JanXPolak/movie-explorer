import { IMovie } from "@/app/types/types";
import MovieRow from "./MovieRow";
import getUniqueGenres from "@/app/utils/getUniqueGenres";
getUniqueGenres

interface Props {
  movies: IMovie[];
}

const ListMovies = ({ movies }: Props) => {
  const genres = getUniqueGenres(movies);
  const moviesByGenre = genres.map((genre) => ({
    genre,
    movies: movies.filter((movie) => movie.genre === genre),
  }));

  if (movies.length === 0) {
    return (
      <div>
        <p>There are no movies.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {moviesByGenre.map(({ genre, movies }) => (
        <div key={genre}>
          <h2>{genre}</h2>
          <MovieRow movies={movies} />
        </div>
      ))}
    </div>
  );
};

export default ListMovies;
