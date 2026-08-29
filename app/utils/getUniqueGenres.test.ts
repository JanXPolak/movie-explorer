import { IMovie } from "../types/types"
import getUniqueGenres from "./getUniqueGenres"

const createMovie = (genre: string): IMovie => ({
    id: "1",
    title: "Test Movie",
    description: "",
    img: "",
    date: "",
    genre: genre,
    likes: 0,
    dislikes: 0,
    isFavorite: false,
});

test("returns one genre if array contains only same genres", () => {
    const movies = [createMovie("Action"), createMovie("Action"), createMovie("Action")]
    const result = getUniqueGenres(movies)
    expect(result).toEqual(["Action"])
})

test("removes duplicate genres from movies", () => {
    const movies = [createMovie("Action"), createMovie("Action"), createMovie("Comedy"), createMovie("Sci-Fi"), createMovie("Sci-Fi")]
    const result = getUniqueGenres(movies)
    expect(result).toEqual(["Action", "Comedy", "Sci-Fi"])
})
test("returns empty array when genres array is empty", () => {
    const movies: IMovie[] = []
    const result = getUniqueGenres(movies)
    expect(result).toEqual([])
})