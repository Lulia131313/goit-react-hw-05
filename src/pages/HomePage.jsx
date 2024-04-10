import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then((data) => setMovies(data));
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default HomePage;
