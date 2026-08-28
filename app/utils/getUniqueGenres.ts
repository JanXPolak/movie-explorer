import { IMovie } from "../types/types";

export default function getUniqueGenres(movies: IMovie[]) {
    const genres: string[] = [];
    for (const movie of movies) {
      if (!genres.includes(movie.genre)) {
        genres.push(movie.genre);
      }
    }
    return genres;
  }