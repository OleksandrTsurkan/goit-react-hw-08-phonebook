import { AuthNav } from 'components/Navigation/AuthNavigation';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { AppBarDiv } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBarDiv>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarDiv>
  );
};
