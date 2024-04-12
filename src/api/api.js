import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTg1N2I4OTMzMTg3MjNkODQyN2IzNDE1YzgwZjNiMSIsInN1YiI6IjY2MTY1OTEyMTA5ZGVjMDE0ODlkNDNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4YGGMB9aN4jredsEpCxX80yig2-wfvn3O4x1Rnl-rLw";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

// Функція для отримання списку найпопулярніших фільмів за останній тиждень
export const fetchTrendingMovies = async () => {
  try {
    const response = await axiosInstance.get("/trending/movie/week");
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch trending movies");
  }
};

// Функція для пошуку фільмів за ключовим словом
export const searchMovies = async (query) => {
  try {
    const response = await axiosInstance.get("/search/movie", {
      params: {
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to search movies");
  }
};

// Функція для отримання деталей про  фільм
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movie details");
  }
};

// Функція акторський склад фільму
export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    throw new Error("Failed to fetch movie credits");
  }
};

// Функція для  оглядів фільму
export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch movie reviews");
  }
};
