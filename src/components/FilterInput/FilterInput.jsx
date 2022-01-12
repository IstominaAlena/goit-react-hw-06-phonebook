import Input from '../../shared/components/Input';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/filterAction';

const FilterInput = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  function filterChangeHandler(e) {
    const { value } = e.target;
    dispatch(filterContacts(value));
  }
  return (
    <>
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
    </>
  );
};
export default FilterInput;
