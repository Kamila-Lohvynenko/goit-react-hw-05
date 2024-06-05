import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../Api';
import Loader from '../../components/Loader/Loader';
import Error from './../../components/Error/Error';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import AddInfo from '../../components/AddInfo/AddInfo';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function getMovieById() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieById();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <Error />}
      {movie && <MovieInfo movie={movie} />}
      {movie && <AddInfo />}
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
