import css from './CastList.module.css';

const CastList = ({ cast }) => {
  const defaultImg =
    '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>';
  return (
    <ul className={css.list}>
      {cast.map(character => {
        return (
          <li key={character.id} className={css.item}>
            <h4 className={css.name}>{character.character}</h4>
            <img
              src={
                character['profile_path']
                  ? `https://image.tmdb.org/t/p/w200/${character['profile_path']}`
                  : defaultImg
              }
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
