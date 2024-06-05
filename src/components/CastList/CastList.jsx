import css from './CastList.module.css';

const CastList = ({ cast }) => {
  return (
    <ul className={css.list}>
      {cast.map(character => {
        return (
          <li key={character.id} className={css.item}>
            <h4 className={css.name}>{character.character}</h4>
            <img
              src={`https://image.tmdb.org/t/p/w200/${character['profile_path']}`}
              alt={character.character}
              className={css.img}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
