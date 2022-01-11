import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { memo } from 'react';
import toonavatar from 'cartoon-avatar';

import { deleteContact } from '../../redux/items/itemsActions';
import Button from '../../shared/components/Button';

import s from './ContactList.module.css';

const ContactList = ({ array }) => {
  const dispatch = useDispatch();

  return (
    <ul className={s.contactList}>
      {array.map(({ id, name, number }) => (
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

ContactList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
