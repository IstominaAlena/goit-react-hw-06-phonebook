import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => ({
  type: 'addContact',
  payload: {
    name,
    number,
    id: nanoid(),
  },
});

// export const mountContacts = array => ({
//   type: 'mountContacts',
//   payload: array,
// });

export const deleteContact = id => ({
  type: 'deleteContact',
  payload: id,
});
