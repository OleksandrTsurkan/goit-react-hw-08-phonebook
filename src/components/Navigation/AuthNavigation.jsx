import { NavLink } from "react-router-dom";
import { NavDiv } from "./Navigation.module";
import css from './Navigation.module.css';


export const AuthNav = () => {
  return (
    <NavDiv>
      <NavLink className={css.NavLink} to="/register">
        Registration
      </NavLink>
      <NavLink className={css.NavLink}  to="/login">
        Sign In
      </NavLink>
    </NavDiv>
  );
};
