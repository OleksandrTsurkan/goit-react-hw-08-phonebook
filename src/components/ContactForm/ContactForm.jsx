import { useEffect, useState } from 'react';
import {
  ButtonSend,
  ContactDiv,
  Form,
  Input,
  Labelcontact,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { createContactsThunk } from 'redux/contacts/thunk';
import { toast } from 'react-toastify';
import { selectContactsList } from 'redux/contacts/contactsSelectors';
import { LoadAdd } from 'components/Loader/Loader';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [add, setAdd] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  useEffect(() => {
    setAdd(false);
  }, [contacts]);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    else setNumber(value);
  };

  const onSubmitAddContact = event => {
    event.preventDefault();
    const data = { name, number };
    const newObj = { ...data, id: nanoid() };

    if (isNameNew(contacts, newObj) !== undefined) {
      toast.warning(`${newObj.name} is already in contacts`);
      return;
    }

    dispatch(createContactsThunk(newObj))
      .unwrap()
      .then(originalPromiseResult => {
        toast.success(
          `${originalPromiseResult.name} successfully added to contacts`
        );
      })
      .catch(() => {
        toast.failure("Sorry, something's wrong");
      });
    reset();
  };

  const isNameNew = (contacts, newObj) => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newObj.name.toLowerCase()
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <h2>Phonebook</h2>
      <ContactDiv>
        <Form onSubmit={onSubmitAddContact}>
          <Labelcontact>
            Name:
            <Input
              onChange={handleChange}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Labelcontact>
          <Labelcontact>
            Number:
            <Input
              onChange={handleChange}
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Labelcontact>
          <ButtonSend type="submit">
            {add && <LoadAdd />} <p>Add contact</p>
          </ButtonSend>
        </Form>
      </ContactDiv>
      <h1>Contacts</h1>
    </>
  );
};
