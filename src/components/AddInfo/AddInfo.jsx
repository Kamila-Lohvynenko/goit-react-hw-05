import { NavLink } from 'react-router-dom';
import css from './AddInfo.module.css';

const AddInfo = () => {
  return (
    <div className={css.wrapper}>
      <h3>Additional information:</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AddInfo;
