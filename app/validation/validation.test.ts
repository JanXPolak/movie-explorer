import { IMovie } from "../types/types";
import { movieDataValidator } from "./validation";
const validMovie: IMovie = {
  "id": "1",
  "title": "Inception",
  "description": "A thief who steals secrets through dreams is given a chance to erase his past by planting an idea in someone's mind.",
  "img": "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  "date": "2010-07-16",
  "genre": "Sci-Fi",
  "likes": 1245,
  "dislikes": 87,
  "isFavorite": true
}

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