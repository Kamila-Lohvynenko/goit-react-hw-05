import { useEffect, useState } from 'react';
import fetchMovies from '../../Api';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const data = await fetchMovies();
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <div>
      <h1>Trending movies for today</h1>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
