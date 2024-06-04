import MovieCard from '../MovieCard/MovieCard';
import css from './MovieList.module.css';
const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map(movie => {
        return <li key={movie.id}>{<MovieCard movie={movie} />}</li>;
      })}
    </ul>
  );
};

export default MovieList;
