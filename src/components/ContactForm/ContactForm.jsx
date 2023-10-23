import { useState } from 'react';
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

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const phoneBook = useSelector(selectContactsList);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    else setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { name, number };
    const newContact = { ...data, id: nanoid() };

    if (inNameNew(phoneBook, newContact) !== undefined) {
      return alert(`${newContact.name}is already in contacts.`);
    }

    dispatch(createContactsThunk(newContact))
      .unwrap()
      .then(promiseResult => {
        toast.success(`${promiseResult.name} successfully added to contacts`);
      })
      .catch(() => {
        toast.failure("Sorry, something's wrong");
      });

    reset();
  };

  const inNameNew = (phoneBook, newContact) => {
    return phoneBook.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
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
        <Form onSubmit={handleSubmit}>
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
          <ButtonSend type="submit">Add contact</ButtonSend>
        </Form>
      </ContactDiv>
      <h1>Contacts</h1>
    </>
  );
};
