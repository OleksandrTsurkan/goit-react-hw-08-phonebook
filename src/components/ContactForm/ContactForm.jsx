import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContactsList } from 'redux/contacts/contactsSelectors';
import {
  ButtonSend,
  ContactDiv,
  FormContact,
  InputContact,
  Labelcontact,
} from './ContactForm.styled';
import { createContactsThunk } from 'redux/contacts/thunk';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

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
    <ContactDiv>
      <FormContact onSubmit={onSubmitAddContact}>
        <Labelcontact>
          Name
          <InputContact
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            value={name}
            placeholder="Enter name ..."
            required
          />
        </Labelcontact>
        <Labelcontact>
          Number
          <InputContact
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            value={number}
            placeholder="Enter number ..."
            required
          />
        </Labelcontact>
        <ButtonSend type="submit">Add contact</ButtonSend>
      </FormContact>
    </ContactDiv>
  );
};
