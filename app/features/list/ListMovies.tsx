import { IMovie } from "@/app/types/types";
import MovieRow from "./MovieRow";

interface Props {
  movies: IMovie[];
}

const ListMovies = ({ movies }: Props) => {
  function getUniqueGenres(movies: IMovie[]) {
    const genres: string[] = [];
    for (const movie of movies) {
      if (!genres.includes(movie.genre)) {
        genres.push(movie.genre);
      }
    }
    return genres;
  }

  const genres = getUniqueGenres(movies);

  if (movies.length === 0) {
    return (
      <div>
        <p>There are no movies.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {genres.map((genre) => (
        <div key={genre}>
          <p>{genre}</p>
          <MovieRow
            genre={genre}
            movies={movies.filter((movie) => movie.genre === genre)}
          />
        </div>
      ))}
    </div>
  );
};

export default ListMovies;
