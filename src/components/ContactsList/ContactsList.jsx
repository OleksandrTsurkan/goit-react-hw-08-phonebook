import { useEffect, useState } from 'react';
import { ButtonDelete, Lilist, Ullist } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk, getContactsThunk } from 'redux/contacts/thunk';
import { toast } from 'react-toastify';
import { selectContactsFilter } from 'redux/filters/slice';
import { selectContactsList } from 'redux/contacts/contactsSelectors';
import DeleteIcon from '@mui/icons-material/Delete';
import { SpinerDel } from 'components/Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(false);
  }, []);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);

  const visibleContacts = contacts.filter(({ name }) =>
    name?.toLowerCase().includes(filter)
  );

  const deleteContact = contactId => {
    dispatch(deleteContactsThunk(contactId))
      .unwrap()
      .then(originalPromiseResult => {
        toast.success(
          `${originalPromiseResult.name} successfully deleted from contacts`
        );
      })
      .catch(() => {
        toast.failure("Sorry, something's wrong");
      });
  };
  return (
    <Ullist>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Lilist key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <ButtonDelete
              type="button"
              onClick={() => deleteContact(id)}
              aria-label="delete"
            >
              {load ? <SpinerDel /> : <DeleteIcon />}
            </ButtonDelete>
          </Lilist>
        );
      })}
    </Ullist>
  );
};
