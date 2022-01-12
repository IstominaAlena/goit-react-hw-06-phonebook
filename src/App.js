import Section from './shared/components/Section';
import FormContacts from './components/FormContacts';
import FilterInput from './components/FilterInput';
import ContactList from './components/ContactList';

import './styles/App.css';

const App = () => {
  return (
    <>
      <Section title={'Phonebook'} classEl={'phonebook'}>
        <FormContacts />
        <FilterInput />
      </Section>

      <Section title={'Contacts'} classEl={'contacts'}>
        <ContactList />
      </Section>
    </>
  );
};

export default App;
