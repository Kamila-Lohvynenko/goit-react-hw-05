import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { Toaster } from 'react-hot-toast';
import { fetchMoviesBySearch } from '../../Api';
import Loader from '../../components/Loader/Loader';
import Error from './../../components/Error/Error';
import MovieList from '../../components/MovieList/MovieList';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [params] = useSearchParams();

  const paramQuery = params.get('query') ?? '';
  useEffect(() => {
    async function getMovies() {
      if (paramQuery === '') {
        return;
      }
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchMoviesBySearch(paramQuery, page);
        setMovies(data.results);
        setShowLoadMore(data.total_pages && data.total_pages !== page);
        setNotFound(data.results.length === 0);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [paramQuery, page]);

  const onSearch = () => {
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
      {notFound && <p>Nothing is found with your request {paramQuery}</p>}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default MoviesPage;
