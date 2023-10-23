import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authThunk';
import { ButtonUser, UserDiv } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserDiv sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      Welcome, {user.name}!
      <ButtonUser
        variant="text"
        color="inherit"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </ButtonUser>
    </UserDiv>
  );
};
