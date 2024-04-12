import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { searchMovies } from "../api/api";
import { Link, useSearchParams, useLocation } from "react-router-dom";

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    async function fetchData() {
      if (query) {
        try {
          const response = await searchMovies(query);
          setSearchResults(response);
          setSearchQuery(query);
        } catch (error) {
          console.error("Failed to search movies:", error.message);
        }
      }
    }
    fetchData();
  }, [query]);

  useEffect(() => {
    setSearchQuery("");
  }, [location.pathname]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await searchMovies(values.search);
      setSearchResults(response);
      setSearchParams({ query: values.search });
      resetForm();
    } catch (error) {
      console.error("Failed to search movies:", error.message);
    }
  };

  return (
    <div>
      <Formik initialValues={{ search: searchQuery }} onSubmit={handleSubmit}>
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
      {searchResults.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
