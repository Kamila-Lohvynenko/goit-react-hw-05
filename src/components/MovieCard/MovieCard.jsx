import { Link, useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';
const MovieCard = ({ movie }) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${movie.id}`} className={css.link} state={location}>
      <div className={css.card}>
        <p className={css.title}>{movie.title}</p>
        <p className={css.text}>Rating: {movie['vote_average']}</p>
        <p className={css.text}>Release date: {movie['release_date']}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
