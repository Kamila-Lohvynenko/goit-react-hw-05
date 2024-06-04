import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const linkClassName = ({ isActive }) =>
    clsx(css.link, isActive && css.active);
  return (
    <nav className={css.nav}>
      <NavLink className={linkClassName} to="/">
        Home
      </NavLink>
      <NavLink to="/movies" className={linkClassName}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
