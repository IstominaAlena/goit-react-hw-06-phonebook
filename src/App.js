import { useSelector, useDispatch } from 'react-redux';

import { filterContacts } from './redux/filter/filterAction';
import Section from './shared/components/Section';
import FormContacts from './components/FormContacts';
import Input from './shared/components/Input';
import ContactList from './components/ContactList';

import './styles/App.css';

const App = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  function filterChangeHandler(e) {
    const { value } = e.target;
    dispatch(filterContacts(value));
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
        <FormContacts />
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
        <ContactList array={filterContactsHandler()} />
      </Section>
    </>
  );
};

export default App;
