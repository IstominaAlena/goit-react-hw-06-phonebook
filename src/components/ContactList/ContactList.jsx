import { useSelector, useDispatch } from 'react-redux';
import { memo } from 'react';
import toonavatar from 'cartoon-avatar';

import { deleteContact } from '../../redux/contacts/itemsActions';
import Button from '../../shared/components/Button';

import s from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const items = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();

  function filterContactsHandler() {
    const lowerCaseFilter = filter.toLowerCase();

    const filteredContacts = items.filter(({ name }) => {
      const lowerCaseName = name.toLowerCase();
      return lowerCaseName.includes(lowerCaseFilter);
    });

    return filteredContacts;
  }

  return (
    <ul className={s.contactList}>
      {filterContactsHandler().map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <img src={toonavatar.generate_avatar()} alt="img" width="60" className={s.contactImg} />
          <div>
            <p>{name}:</p>
            <p>{number}</p>
          </div>

          <Button type="button" text="&#128473;" onClick={() => dispatch(deleteContact(id))} />
        </li>
      ))}
    </ul>
  );
};

export default memo(ContactList);
