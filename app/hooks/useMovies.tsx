import { useEffect, useState } from "react";
import { IMovie } from "../types/types";
import { API_URL } from "../constants/constants";

const useMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(`${API_URL}/movies`);
        if(!res.ok){
            throw new Error(`HTTP ${res.status}`)
        }
        const json = await res.json()
        if (!ignore) setMovies(json);
      } catch {
        if (!ignore) {
          console.error("An error has occured while fetching data.");
          setIsError(true);
        }
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);
  return { movies, isLoading, isError };
};

export default useMovies;
