import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { Container, Title, TitleSecondary } from './App.styled';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Elon Musk', number: '459-12-56' },
      { id: 'id-2', name: 'Artem Barabash', number: '443-89-12' },
      { id: 'id-3', name: 'Oleksandr Repeta', number: '645-17-79' },
      { id: 'id-4', name: 'Vitaliy Lyakh', number: '093-974-92-77' },
    ],
    filter: '',
  };

  addNewContact = ({ name, number, id = nanoid() }) => {
    const { contacts } = this.state;
    const newContact = {
      name,
      number,
      id,
    };
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = nanoid => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== nanoid),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addNewContact}></ContactForm>
        <TitleSecondary>Contacts</TitleSecondary>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
export default App;
