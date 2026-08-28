import * as z from "zod";
import { IMovie } from "../types/types";
const MovieSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    genre: z.string(),
    likes: z.number(),
    dislikes: z.number(),
    isFavorite: z.boolean(),
  });

export function movieDataValidator(movies: any): IMovie[]{
    if(!Array.isArray(movies)) return []

    const validMovies: IMovie[] = []
    const invalidMovies = []

    for (let i = 0; i < movies.length; i++) {
        const result = MovieSchema.safeParse(movies[i])
        if(result.success){
            validMovies.push(result.data)
        } else {
            invalidMovies.push(movies[i])
        }
    }

    if (invalidMovies.length !== 0){
        console.warn("Found invalid movies in database:", invalidMovies)
    }
    return validMovies
}