import { createContext } from "react";
import { IMovie } from "@/app/types/types";

interface MovieDetailsContextType {
  selectedMovie: IMovie | null;
  setSelectedMovie: (movie: IMovie | null) => void;
}

export const MovieDetailsContext = createContext<MovieDetailsContextType>({
  selectedMovie: null,
  setSelectedMovie: () => {},
});
