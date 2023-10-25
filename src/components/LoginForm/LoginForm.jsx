import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logIn } from 'redux/auth/authThunk';
import {
  ButtonSend,
  Form,
  Input,
  Labelcontact,
  LoginDiv,
} from './LoginForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const hendleSubmitLogin = event => {
    event.preventDefault();
    const loginUser = { email, password };
    //  console.log('logInUser', loginUser);
    dispatch(logIn(loginUser))
      .unwrap()
      .then(originalPromiseResult => {
        toast.success(`${originalPromiseResult.loginUser.name} welcome back!`);
      })
      .catch(() => {
        return 'Incorrect login or password';
      });

    setEmail('');
    setPassword('');
  };

  return (
    <LoginDiv>
      <Form onSubmit={hendleSubmitLogin}>
        <Labelcontact>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
            title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
            required
            placeholder="Enter email ..."
            onChange={handleChangeInput}
          />
        </Labelcontact>
        <Labelcontact>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
            required
            placeholder="Enter password ..."
            onChange={handleChangeInput}
          />
        </Labelcontact>
        <ButtonSend type="submit">LogIn</ButtonSend>
      </Form>
    </LoginDiv>
  );
};

export default LoginForm;
