import { useEffect, useState } from 'react';
import { fetchTrendyMovies } from '../../Api';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import Error from './../../components/Error/Error';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchTrendyMovies();
        console.log(data);
        setMovies(data.results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <div>
      <h1>Trending movies for today</h1>
      <MovieList movies={movies} />
      {isLoading && <Loader />}
      {error && <Error />}
    </div>
  );
};

export default HomePage;
