import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/api";
import { useNavigate, useLocation } from "react-router-dom";
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = useRef(location.state?.from);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Link to={goBack.current}>Back</Link>
      {/* <button onClick={() => navigate(-1)}>Back</button> */}

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
