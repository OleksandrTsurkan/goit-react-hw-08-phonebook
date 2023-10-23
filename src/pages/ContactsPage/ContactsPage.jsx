import * as React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Error } from 'components/Error/Error';
import { useSelector } from 'react-redux';
import { ContactList } from 'components/ContactsList/ContactsList';
import { EmptyContactsList } from 'components/EmptyContactList/EmptyContactList';
import { ContactsContainer } from './ContactsPage.styled';
import {
  selectContactsList,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const phoneBook = useSelector(selectContactsList);

  return (
    <ContactsContainer>
      <ContactForm />
      <Filter />
      {error ? <Error /> : <ContactList />}
      {phoneBook.length === 0 && !error && !isLoading && <EmptyContactsList />}
    </ContactsContainer>
  );
};

export default ContactsPage;
