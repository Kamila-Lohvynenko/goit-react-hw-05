import css from './MovieInfo.module.css';

const MovieInfo = ({ movie }) => {
  return (
    <div className={css.wrapper}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie['backdrop_path']}`}
        alt={movie.title}
        className={css.img}
      />
      <div>
        <h2>{movie.title}</h2>
        <p className={css.title}>Overview:</p>
        <p className={css.text}> {movie.overview}</p>
        <p className={css.title}>Genres:</p>
        <p className={css.text}>
          {movie.genres.map(genre => {
            return `${genre.name}, `;
          })}
        </p>
        <p className={css.title}>Production countries:</p>
        <p className={css.text}>
          {movie['production_countries'].map(country => {
            return `${country.name}, `;
          })}
        </p>
      </div>
    </div>
  );
};

export default MovieInfo;
