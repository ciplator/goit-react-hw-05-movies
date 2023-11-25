import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "movies-api/Api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from "components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <h1>TRENDING TODAY</h1>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default HomePage;
