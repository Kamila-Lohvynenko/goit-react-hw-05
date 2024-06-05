import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { Toaster } from 'react-hot-toast';
import { fetchMoviesBySearch } from '../../Api';
import Loader from '../../components/Loader/Loader';
import Error from './../../components/Error/Error';
import MovieList from '../../components/MovieList/MovieList';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    async function getMovies() {
      if (query === '') {
        return;
      }
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchMoviesBySearch(query, page);
        setMovies(prev => {
          return [...prev, ...data.results];
        });
        setShowLoadMore(data.total_pages && data.total_pages !== page);
        console.log(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [query, page]);

  const onSearch = query => {
    setQuery(query);
    setPage(1);
    setMovies([]);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      {error && <Error />}
      {movies.length > 0 && showLoadMore && !isLoading && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default MoviesPage;
