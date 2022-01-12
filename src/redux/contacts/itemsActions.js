import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('addContact', (name, number) => ({
  payload: {
    name,
    number,
    id: nanoid(),
  },
}));

export const deleteContact = createAction('deleteContact');
