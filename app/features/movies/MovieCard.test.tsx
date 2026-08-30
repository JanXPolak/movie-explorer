import { IMovie } from "@/app/types/types";
import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { MovieDetailsContext } from "@/app/context/MovieDetailsContext";
import userEvent from "@testing-library/user-event";

const movie: IMovie = {
  id: "1",
  title: "Interstellar",
  description:
    "A group of explorers travels through a wormhole in space in search of a new home for humanity.",
  img: "someLink",
  date: "2014-11-07",
  genre: "Sci-Fi",
  likes: 10,
  dislikes: 2,
  isFavorite: false,
};

test("renders movie title", () => {
  render(<MovieCard movie={movie} />);
  const title = screen.getByText(movie.title);
  expect(title).toBeInTheDocument();
});

test("sets selected movie when clicked", async () => {
  const user = userEvent.setup();
  const setSelectedMovie = jest.fn();
  render(
    <MovieDetailsContext value={{ selectedMovie: null, setSelectedMovie }}>
      <MovieCard movie={movie} />
    </MovieDetailsContext>
  );
  const card = screen.getByText(movie.title);
  await user.click(card);
  expect(setSelectedMovie).toHaveBeenCalledWith(movie);
});
