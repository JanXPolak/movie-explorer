import { IMovie } from "@/app/types/types";
import { render, screen } from "@testing-library/react";
import ListMovies from "./ListMovies";

function createMovie(id: string, title: string, genre: string): IMovie {
  return {
    id: id,
    title: title,
    description: "",
    img: "someLink",
    date: "",
    genre: genre,
    likes: 10,
    dislikes: 2,
    isFavorite: false,
  };
}

test("renders nothing when movies list is empty", () => {
  const movies: IMovie[] = [];
  render(<ListMovies movies={movies} />);
  const title = screen.queryByRole("heading");
  expect(title).not.toBeInTheDocument();
});

test("renders unique genres as headings", () => {
  const movies: IMovie[] = [
    createMovie("1", "Inception", "Action"),
    createMovie("2", "Batman", "Action"),
    createMovie("3", "The Hangover", "Comedy"),
  ];
  render(<ListMovies movies={movies} />);
  const actionHeading = screen.getAllByRole("heading", { name: "Action" });
  const comedyHeading = screen.getByRole("heading", { name: "Comedy" });
  expect(actionHeading).toHaveLength(1);
  expect(comedyHeading).toBeInTheDocument();
});
