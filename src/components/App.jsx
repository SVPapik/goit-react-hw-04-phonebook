import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { Container, Title, TitleSecondary } from './App.styled';
import { getFromLocalStorage, setToLocalStorage } from 'utils/localstorage';

const baseContacts = [
  { id: 'id-1', name: 'Elon Musk', number: '459-12-56' },
  { id: 'id-2', name: 'Artem Barabash', number: '443-89-12' },
  { id: 'id-3', name: 'Oleksandr Repeta', number: '645-17-79' },
  { id: 'id-4', name: 'Vitaliy Lyakh', number: '093-974-92-77' },
];

const App = () => {
  const [contacts, setContacts] = useState(
    () => getFromLocalStorage('contacts') ?? baseContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setToLocalStorage('contacts', contacts);
  }, [contacts]);

  const addNewContact = ({ name, number, id = nanoid() }) => {
    const newContact = {
      id,
      name,
      number,
    };
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts(contacts => [newContact, ...contacts]);
  };

  const deleteContact = nanoid => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== nanoid)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addNewContact}></ContactForm>
      <TitleSecondary>Contacts</TitleSecondary>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </Container>
  );
};

export default App;
