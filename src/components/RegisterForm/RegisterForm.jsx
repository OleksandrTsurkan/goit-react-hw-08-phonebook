import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from 'redux/auth/authThunk';
import { ButtonSend, Form, Input, Labelcontact, LoginDiv } from './RegisterForm.module';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
  const handleSubmitUser = e => {
    e.preventDefault();
    const newUser = { name, email, password };
    console.log('newUser', newUser);
    dispatch(register(newUser))
      .unwrap()
      .then(originalPromiseResult => {
        toast.success(`${originalPromiseResult.newUser.name} welcome!`);
      })
      .catch(() => {
        toast.failure("Sorry, something's wrong");
      });
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <LoginDiv>
      <Form onSubmit={handleSubmitUser}>
        <Labelcontact>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name ..."
            onChange={handleChangeInput}
          />
        </Labelcontact>
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
        <ButtonSend type="submit">Register</ButtonSend>
      </Form>
    </LoginDiv>
  );
};

export default RegisterForm;
