import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/api";
import { Link, useLocation } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
