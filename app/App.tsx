"use client";
import ListMovies from "./features/list/ListMovies";
import useMovies from "./hooks/useMovies";

const App = () => {
  const { movies, isLoading, isError } = useMovies();
  if (isLoading) return <p>Loading data...</p>;
  if (isError) return <p>An error has occured while fetching data.</p>;
  return (
    <div>
      <ListMovies movies={movies}/>
    </div>
  );
};

export default App;
