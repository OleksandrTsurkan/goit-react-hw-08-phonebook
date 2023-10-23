import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';
import { ButtonHome, HomeDiv, HomeText } from './HomePage.styled';
import css from '../../components/Navigation/Navigation.module.css';


export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <HomeDiv>
      {isLoggedIn ? (
        <>
          <HomeText>
            Hi, {user.name}! <br />
            Welcome to your phonebook.
          </HomeText>
        </>
      ) : (
        <>
          <HomeText>Hello! I'm your phonebook.</HomeText>
          <HomeText>Please log in to your account or register.</HomeText>

          <ButtonHome>
            <NavLink className={css.NavLinkHome} to="/login">
              Sign In
            </NavLink>
          </ButtonHome>
        </>
      )}
    </HomeDiv>
  );
}
