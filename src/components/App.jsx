import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
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

    // contacts.includes(this.name)
    //   ? alert(`${name} is already in contacts`)
    //   : this.setState(({ contacts }) => ({
    //       contacts: [newContact, ...contacts],
    //     }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}
export default App;
