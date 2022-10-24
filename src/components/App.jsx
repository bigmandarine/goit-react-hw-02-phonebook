import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };
  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };
  addContact = data => {
    data.id = nanoid();
    const { contacts } = this.state;
    const checkContact = contacts.find(contact => contact.name === data.name);
    checkContact
      ? alert(`${data.name} is already in the contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };
  onDeleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => idContact !== contact.id),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <div>
          <h2>Contacts</h2>
          <ContactList
            contacts={contacts}
            onDeleteContact={this.onDeleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
