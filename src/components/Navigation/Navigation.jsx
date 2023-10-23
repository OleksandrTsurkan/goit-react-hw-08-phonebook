import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { NavDiv } from "./Navigation.module";
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavDiv>
      <NavLink className={css.NavLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.NavLink}>
          Contacts
        </NavLink>
      )}
    </NavDiv>
  );
};
