import { IMovie } from "@/app/types/types";
import { render, screen } from "@testing-library/react";
import MovieDetails from "./MovieDetails";

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

test("renders movie genre", () => {
  render(<MovieDetails movie={movie} />);
  const genre = screen.getByText(movie.genre);
  expect(genre).toBeInTheDocument();
});

test("renders movie title", () => {
  render(<MovieDetails movie={movie} />);
  const title = screen.getByText(movie.title);
  expect(title).toBeInTheDocument();
});
test("renders movie date", () => {
  render(<MovieDetails movie={movie} />);
  const date = screen.getByText(movie.date);
  expect(date).toBeInTheDocument();
});
test("renders movie description", () => {
  render(<MovieDetails movie={movie} />);
  const description = screen.getByText(movie.description);
  expect(description).toBeInTheDocument();
});

test("renders MovieActions component", () => {
  render(<MovieDetails movie={movie} />);

  const likeButton = screen.getByRole("button", { name: "Add to liked" });
  const dislikeButton = screen.getByRole("button", { name: "Add to disliked" });
  const favoriteButton = screen.getByRole("button", {
    name: "Add to favorites",
  });
  expect(likeButton).toBeInTheDocument();
  expect(dislikeButton).toBeInTheDocument();
  expect(favoriteButton).toBeInTheDocument();
});
