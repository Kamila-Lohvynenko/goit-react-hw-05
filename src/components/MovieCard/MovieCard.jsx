import css from './MovieCard.module.css';
const MovieCard = ({ movie }) => {
  return (
    <div className={css.card}>
      <p className={css.title}>{movie.title}</p>
      <p className={css.text}>Rating: {movie['vote_average']}</p>
      <p className={css.text}>Release date: {movie['release_date']}</p>
    </div>
  );
};

export default MovieCard;
