import { IMovie } from "@/app/types/types";
import SearchResults from "./SearchResults";
import { render, screen } from "@testing-library/react";

function createMovie(id: string, title: string, genre: string): IMovie {
  return {
    id,
    title,
    description: "",
    img: "someLink",
    date: "",
    genre,
    likes: 10,
    dislikes: 2,
    isFavorite: false,
  };
}

test("renders movies matching search query", () => {
  const movies = [
    createMovie("1", "Inception", "Sci-Fi"),
    createMovie("2", "Batman", "Action"),
    createMovie("3", "The Hangover", "Comedy"),
  ];
  const query = "incep";
  render(<SearchResults searchQuery={query} movies={movies} />);
  const title = screen.getByText("Inception");
  expect(title).toBeInTheDocument();
});

test("renders only movies that match search query", () => {
  const movies = [
    createMovie("1", "Inception", "Sci-Fi"),
    createMovie("2", "Batman", "Action"),
    createMovie("3", "The Hangover", "Comedy"),
  ];
  const query = "incep";
  render(<SearchResults searchQuery={query} movies={movies} />);
  expect(screen.queryByText("Batman")).not.toBeInTheDocument();
  expect(screen.queryByText("The Hangover")).not.toBeInTheDocument();
});

test("search is case-insensitive", () => {
  const movies = [
    createMovie("1", "Inception", "Sci-Fi"),
    createMovie("2", "Batman", "Action"),
    createMovie("3", "The Hangover", "Comedy"),
  ];
  const query = "InCep";
  render(<SearchResults searchQuery={query} movies={movies} />);
  const title = screen.getByText("Inception");
  expect(title).toBeInTheDocument();
});
