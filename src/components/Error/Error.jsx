import { useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/contactsSelectors';
import { ErrorDiv } from './Error.styled';

export const Error = () => {
  const error = useSelector(selectError);

  return <ErrorDiv>{error}</ErrorDiv>;
};
