import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/contacts/itemsActions';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';

import s from './FormContacts.module.css';

const FormContacts = () => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const formElements = new FormData(e.currentTarget);
    const dataObj = {};

    formElements.forEach((value, name) => (dataObj[name] = value));
    const { name, number } = dataObj;

    if (!name || !number) {
      return alert('Please fill the form');
    }

    dispatch(addContact(name, number));
    resetForm();
  }

  function resetForm() {
    const nameInput = document.querySelector('input[name="name"]');
    const numberInput = document.querySelector('input[name="number"]');

    nameInput.value = '';
    numberInput.value = '';
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <Input
          labelName="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholderValue="Jane Doe"
        />

        <Input
          labelName="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholderValue="+38-099-123-45-67"
        />

        <Button type="submit" text="Add contact" />
      </form>
    </>
  );
};

export default FormContacts;
