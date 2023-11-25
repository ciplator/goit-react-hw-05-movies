

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'movies-api/Api';
import { Loader } from 'components/Loader/Loader';

 const Reviews = () => {
  const { movieId } = useParams();
   const [reviews, setReviews] = useState([]);
   const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        setLoading(true);
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
           setError(error);
      } finally {
        setLoading(false)
      }
    };

    movieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {reviews.length > 0 && (
        <div>
          <h2>Movie reviews</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && !loading && !error && (
        <div>There are no reviews for this movie yet</div>
      )}
    </>
  );
};

export default Reviews;