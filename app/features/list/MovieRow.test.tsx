import { render, screen } from "@testing-library/react";
import MovieRow from "./MovieRow";
import { IMovie } from "@/app/types/types";

function createMovie(id: string, title: string, img = ""): IMovie {
  return {
    id: id,
    title: title,
    description: "",
    img: img,
    date: "",
    genre: "Action",
    likes: 10,
    dislikes: 2,
    isFavorite: false,
  };
}

test("renders movie title", () => {
  const movies = [createMovie("1", "Inception", "inception.jpg")];
  render(<MovieRow movies={movies} />);
  const title = screen.getByText(/inception/i);
  expect(title).toBeInTheDocument();
});

test("renders an image", () => {
  const movies = [createMovie("1", "Inception", "inception.jpg")];
  render(<MovieRow movies={movies} />);
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", "inception.jpg");
});

test("renders multiple movies", () => {
  const movies = [
    createMovie("1", "Inception", "inception.jpg"),
    createMovie("2", "Interstellar", "interstellar.jpg"),
    createMovie("3", "Spider-Man", "spider-man.jpg"),
  ];
  render(<MovieRow movies={movies} />);
  expect(screen.getByText(/inception/i)).toBeInTheDocument();
  expect(screen.getByText(/interstellar/i)).toBeInTheDocument();
  expect(screen.getByText(/spider-man/i)).toBeInTheDocument();

  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(movies.length);
});

test("renders nothing when movies list is empty", () => {
  const movies: IMovie[] = [];
  render(<MovieRow movies={movies} />);
  const images = screen.queryAllByRole("img");
  expect(images).toHaveLength(0);
});
