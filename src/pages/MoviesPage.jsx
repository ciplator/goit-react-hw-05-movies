


import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'movies-api/Api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const MoviesPages = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchMovieByQuery = async () => {
      try {
        setLoading(true);
        const currentQuery = searchParams.get('query');
        if (!currentQuery) {
          setLoading(false);
          return;
        }

        const movieByQuery = await fetchSearch(currentQuery);
        setMovies(movieByQuery);
      } catch (error) {
        console.error(error);
        setError(error)
      } finally {
        setLoading(false);
      }
    };

    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPages;


