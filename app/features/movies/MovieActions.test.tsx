import { render, screen } from "@testing-library/react";
import MovieActions from "./MovieActions";
import { IMovie } from "@/app/types/types";

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

test("renders movie action buttons", () => {
  render(<MovieActions movie={movie} />);

  expect(
    screen.getByRole("button", { name: "Add to liked" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Add to disliked" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Add to favorites" })
  ).toBeInTheDocument();
});

test("renders likes and dislikes count", () => {
  render(<MovieActions movie={movie} />);

  const likeButton = screen.getByRole("button", { name: "Add to liked" });
  const dislikeButton = screen.getByRole("button", { name: "Add to disliked" });

  expect(likeButton).toHaveTextContent(movie.likes.toString());
  expect(dislikeButton).toHaveTextContent(movie.dislikes.toString());
});
