import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { NavDiv } from './Navigation.styled';

export const AuthNav = () => {
  return (
    <NavDiv>
      <NavLink className={css.NavLink} to="/register">
        Registration
      </NavLink>
      <NavLink className={css.NavLink} to="/login">
        Sign In
      </NavLink>
    </NavDiv>
  );
};
