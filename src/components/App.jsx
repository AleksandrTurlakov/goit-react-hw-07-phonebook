import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <>
      <h1>Phonebook</h1>
      <GlobalStyle />
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length === 0 ? (
        <h2>You don't have saved contacts</h2>
      ) : (
        <Contacts />
      )}
    </>
  );
};
