import { NavLink } from 'react-router-dom';
import css from './AddInfo.module.css';
import clsx from 'clsx';

const AddInfo = () => {
  const linkClassName = ({ isActive }) =>
    clsx(css.link, isActive && css.active);
  return (
    <div className={css.wrapper}>
      <h3>Additional information:</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="cast" className={linkClassName}>
            Cast
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="reviews" className={linkClassName}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AddInfo;
