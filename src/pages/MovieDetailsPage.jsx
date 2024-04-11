import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Link to="/">Back</Link>
      <h2>MovieDetailsPage</h2>

      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h1>
          {movie.title} {new Date(movie.release_date).getFullYear()}
        </h1>
        <h3>User Score:{Math.round(movie.vote_average * 10)}%</h3>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>

        {movie.genres.map((genre) => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </div>

      <h3>Additional information</h3>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
