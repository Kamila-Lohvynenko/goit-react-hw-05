import css from './MovieInfo.module.css';

const MovieInfo = ({ movie }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  return (
    <div className={css.wrapper}>
      <img
        src={
          movie['backdrop_path']
            ? `https://image.tmdb.org/t/p/w500/${movie['backdrop_path']}`
            : defaultImg
        }
        alt={movie.title}
        className={css.img}
        width={500}
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
