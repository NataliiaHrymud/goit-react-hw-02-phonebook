import React, { Component } from 'react';
import shortid from 'shortid';
// import ContactForm from './ContactForm';

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
    number: ''
  }

  handleChange = (e) => {
    const key = e.target.dataset.input;
    const value = e.target.value;
    this.setState({ [key]:value })
  }

  submitData = (e) => {
    e.preventDefault();
    const {name, number, contacts} = this.state;
    contacts.find(contact => contact.name.toLowerCase().includes(name.toLowerCase())) 
    ? alert(`${name} is already in contacts!`)
    : this.setState((prevState)=>({contacts: [...prevState.contacts, {name, number, id: shortid.generate()}], name: '', number: ''}))
  }
  // submitData = (e) => {
  //   e.preventDefault();
  //   const {name, number, contacts} = this.state;
  //   contacts.some(contact => contact.name.toLowerCase().includes(name.toLowerCase()))===true     
  //   ? alert(`${name} is already in contacts!`)
  //   : this.setState((prevState)=>({contacts: [...prevState.contacts, {name, number, id: shortid.generate()}], name: '', number: ''}))
  // }

  filter = () => {
    const {contacts, filter} = this.state;
    return (filter) ? contacts.filter(contact => contact.name.toLowerCase().includes(filter)) : contacts
  }

  delete = (e) => {
    const id = e.target.id;
    this.setState((prevState) => ({contacts: [...prevState.contacts.filter(contact => contact.id !== id)]}))
  }

  render () {
    const {name, number} = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        {/* <ContactForm onSubmit={this.submitData}/>  */}
        <form onSubmit={this.submitData}>
          <h2>Name</h2>
          <input type="text" onChange={this.handleChange} name="name" data-input ="name" value={name}/>
          <h2>Number</h2>
          <input type="text" onChange={this.handleChange} name="number" data-input ="number" value={number}/>
          <p></p>
          <button type="submit"> Add new contact </button>
        </form>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <input type="text" onChange={this.handleChange} data-input ="filter"/>
        <ul>
          {this.filter().map(contact => (
          <li key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}  </span>
            <button type="button" id={contact.id} onClick={this.delete}>Delete</button>
          </li>))}
        </ul>
      </>
    );
  }

}

export default App;
