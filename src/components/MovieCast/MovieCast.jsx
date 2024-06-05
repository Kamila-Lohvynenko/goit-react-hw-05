import { fetchMovieCredits } from '../../Api';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Error from './../Error/Error';
import { useParams } from 'react-router-dom';
import CastList from '../CastList/CastList';

const MovieCast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cast, setCast] = useState(null);
  useEffect(() => {
    if (!movieId) return;
    async function getMovieCredits() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieCredits(movieId);
        setCast(data.cast);
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
      <h3>Movie cast</h3>
      {cast && <CastList cast={cast} />}
    </div>
  );
};

export default MovieCast;
