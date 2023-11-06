import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const AuthNav = () => {
  return (
    <div className={css.navigation}>
      <NavLink className={css.NavLink} to="/register">
        Registration
      </NavLink>
      <NavLink className={css.NavLink}  to="/login">
        Sign In
      </NavLink>
    </div>
  );
};
