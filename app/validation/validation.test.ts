import { movieDataValidator } from "./validation";
const validMovie = {
  id: "1",
  title: "Inception",
  description: "A mind-bending thriller",
  date: "2010-07-16",
  genre: "Sci-Fi",
  likes: 100,
  dislikes: 5,
  isFavorite: false,
};

test("returns all movies, when api returns only appropriate movies", () => {
  const movies = [validMovie, validMovie, validMovie]
  const result = movieDataValidator(movies)
  expect(result).toHaveLength(movies.length)
})

test("returns appropriate movies, when some are inappropriate", () => {
  const movies = [validMovie, { ...validMovie, title: false }, {}, validMovie, { ...validMovie, genre: 1 }]
  const result = movieDataValidator(movies)
  expect(result).toHaveLength(2)
})

test("returns empty array, when there are no appropriate movies", () => {
  const movies = [{}, { title: 1 }, { hobby: "react" }]
  const result = movieDataValidator(movies)
  expect(result).toEqual([])
})

test("returns empty array, when there are no movies to validate", () => {
  const result = movieDataValidator([])
  expect(result).toEqual([])
})

test("returns empty array, when movies is not an array", () => {
  const possibleValues = [null, undefined, {}, 1, 0, true, "", false, "someString", validMovie]
  for (let value of possibleValues) {
    const result = movieDataValidator(value)
    expect(result).toEqual([])
  }
})