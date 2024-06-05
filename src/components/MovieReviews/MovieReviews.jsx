import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../Api';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import ReviewList from '../ReviewList/ReviewList';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    if (!movieId) return;
    async function getMovieCredits() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieCredits();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <Error />}
      <h3>Movie reviews</h3>
      {reviews && <ReviewList reviews={reviews} />}
    </div>
  );
};

export default MovieReviews;
