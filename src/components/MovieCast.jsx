import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../api/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then((data) => setCast(data));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.map((actor) => (
        <div key={actor.id}>
          {actor.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
          )}
          <h3>{actor.name}</h3>
          <p>Character: {actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCast;
