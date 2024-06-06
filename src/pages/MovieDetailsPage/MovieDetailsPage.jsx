import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../Api';
import Loader from '../../components/Loader/Loader';
import Error from './../../components/Error/Error';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import AddInfo from '../../components/AddInfo/AddInfo';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/movies');

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
      <Link to={backLinkRef.current} className={css.link}>
        Go back
      </Link>
      {isLoading && <Loader />}
      {error && <Error />}
      {movie && <MovieInfo movie={movie} />}
      {movie && <AddInfo />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
