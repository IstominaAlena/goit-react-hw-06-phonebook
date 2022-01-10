import { connect } from 'react-redux';

import { useState, useCallback, useEffect, useRef } from 'react';
// import { nanoid } from 'nanoid';

import Section from './shared/components/Section';
import FormContacts from './components/FormContacts';
import Input from './shared/components/Input';
import ContactList from './components/ContactList';
import { addContact, deleteContact } from './redux/items/itemsActions';

import './styles/App.css';

const App = ({ items, add, mount, remove }) => {
  // const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);
  console.log(items);

  // useEffect(() => {
  //   const itemsList = JSON.parse(localStorage.getItem('items'));

  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;

  //     if (!Array.isArray(itemsList)) {
  //       return;
  //     }

  //     if (itemsList.length) {
  //       mount(itemsList);
  //       return;
  //     }
  //   }

  //   if (itemsList.length !== items.length) {
  //     localStorage.setItem('items', JSON.stringify(items));
  //   }
  // }, [items, mount]);

  function checkContactHandler({ name, number }) {
    if (!name) {
      return alert('Please enter name!');
    }
    if (!number) {
      return alert('Please enter number!');
    }

    addContactHandler({ name, number });
  }

  function addContactHandler({ name, number }) {
    const lowerCaseName = name.toLowerCase();

    const findInArray = items.find(({ name }) => {
      const lowerCaseStateName = name.toLowerCase();
      return lowerCaseStateName === lowerCaseName;
    });

    if (findInArray) {
      return alert(`${name} is already in your contacts!`);
    }

    add({ name, number });
  }

  // const deleteContactHandler = useCallback(
  //   id => {
  //     setContacts(contacts => contacts.filter(contact => contact.id !== id));
  //   },
  //   [setContacts]
  // );

  function filterChangeHandler(e) {
    const { value } = e.target;
    setFilter(value);
  }

  function filterContactsHandler() {
    if (!filter) {
      return items;
    }

    const lowerCaseFilter = filter.toLowerCase();

    const filteredContacts = items.filter(({ name }) => {
      const lowerCaseName = name.toLowerCase();
      return lowerCaseName.includes(lowerCaseFilter);
    });

    return filteredContacts;
  }

  return (
    <>
      <Section title={'Phonebook'} classEl={'phonebook'}>
        <FormContacts submitedData={checkContactHandler} />
        <Input
          labelName="Find contact by name"
          value={filter}
          onChange={filterChangeHandler}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholderValue="Search"
        />
      </Section>

      <Section title={'Contacts'} classEl={'contacts'}>
        <ContactList contacts={items} onDeleteItem={remove} />
      </Section>
    </>
  );
};

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = {
  add: addContact,
  remove: deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
