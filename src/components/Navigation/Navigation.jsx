import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { NavDiv } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavDiv className={css.navigation}>
      <NavLink className={css.NavLink} to="/">Home</NavLink>
      {isLoggedIn && <NavLink className={css.NavLink} to="/contacts">Contacts</NavLink>}
    </NavDiv>
  );
};
