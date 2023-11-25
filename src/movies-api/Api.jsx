import axios from "axios";

const API_KEY = 'd44e94394abd272557b89aec1c409472';

const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  },
});

// Get the trending movies
const fetchTrendingMovies = async () => {
  const response = await axiosInstance.get(`trending/movie/day`);
  return response.data.results;
};

// Get full movie information
const fetchMovieDetails = async movieId => {
  const response = await axiosInstance.get(`/movie/${movieId}`);
  return response.data;
};

// Search for movies by their original, translated and alternative titles
const fetchSearch = async movieName => {
  const response = await axiosInstance.get(`/search/movie?query=${movieName}`);
  return response.data.results;
};

// Get the cast information
const fetchMovieCast = async movieId => {
  const response = await axiosInstance.get(`movie/${movieId}/credits`);
  return response.data.cast;
};

// Get the user reviews for a movie
const fetchMovieReviews = async movieId => {
  const response = await axiosInstance.get(`movie/${movieId}/reviews`);
  return response.data.results;
};

export {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchSearch,
  fetchMovieCast,
  fetchMovieReviews,
};
    
