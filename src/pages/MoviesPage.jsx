import { Formik, Form, Field } from "formik";
import { useEffect, useMemo, useState } from "react";
import { searchMovies } from "../api/api";
import {
  Link,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("search") || "";
  const location = useLocation();

  useEffect(() => {
    const storedSearchResults = JSON.parse(
      localStorage.getItem("searchResults")
    );
    if (storedSearchResults) {
      setSearchResults(storedSearchResults);
    }
  }, []);

  const initialValues = {
    search: query,
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const movies = await searchMovies(values.search);
      setSearchResults(movies);
      setSearchParams(values.search ? { search: values.search } : {});
      localStorage.setItem("searchResults", JSON.stringify(movies));
      resetForm();
    } catch (error) {
      console.error("Failed to search movies:", error.message);
    }
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="search"
            placeholder="Search..."
            className="input"
          />
          <button type="submit" className="btn border">
            Search
          </button>
        </Form>
      </Formik>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesPage;
