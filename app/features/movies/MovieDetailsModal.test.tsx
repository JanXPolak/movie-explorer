import { IMovie } from "@/app/types/types";
import MovieDetailsModal from "./MovieDetailsModal";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MovieDetailsContext } from "@/app/context/MovieDetailsContext";

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

test("renders movie image", () => {
  render(<MovieDetailsModal movie={movie} />);
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", movie.img);
});

test("renders close button", () => {
  render(<MovieDetailsModal movie={movie} />);
  const button = screen.getByRole("button", {
    name: "Close movie details",
  });
  expect(button).toBeInTheDocument();
});

test("closes modal when close button is clicked", async () => {
  const user = userEvent.setup();
  const setSelectedMovie = jest.fn();

  render(
    <MovieDetailsContext value={{ selectedMovie: movie, setSelectedMovie }}>
      <MovieDetailsModal movie={movie} />
    </MovieDetailsContext>
  );

  const button = screen.getByRole("button", {
    name: "Close movie details",
  });

  await user.click(button);

  expect(setSelectedMovie).toHaveBeenCalledWith(null);
});
