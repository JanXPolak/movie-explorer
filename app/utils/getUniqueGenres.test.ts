import { IMovie } from "../types/types"
import getUniqueGenres from "./getUniqueGenres"

const createMovie = (id: string, genre: string): IMovie => ({
    id: id,
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
    const movies = [createMovie("1", "Action"), createMovie("2", "Action"), createMovie("3", "Action")]
    const result = getUniqueGenres(movies)
    expect(result).toEqual(["Action"])
})

test("removes duplicate genres from movies", () => {
    const movies = [createMovie("1", "Action"), createMovie("2", "Action"), createMovie("3", "Comedy"), createMovie("4", "Sci-Fi"), createMovie("5", "Sci-Fi")]
    const result = getUniqueGenres(movies)
    expect(result).toEqual(["Action", "Comedy", "Sci-Fi"])
})
test("returns empty array when genres array is empty", () => {
    const movies: IMovie[] = []
    const result = getUniqueGenres(movies)
    expect(result).toEqual([])
})