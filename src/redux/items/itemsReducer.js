import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact } from '../items/itemsActions';

const itemReducer = createReducer([], {
  [addContact.type]: (state, { payload }) => {
    const lowerCaseName = payload.name.toLowerCase();

    const findInArray = state.find(({ name }) => {
      const lowerCaseStateName = name.toLowerCase();
      return lowerCaseStateName === lowerCaseName;
    });

    if (findInArray) {
      return alert(`${payload.name} is already in your contacts!`);
    }
    return [...state, payload];
  },
  [deleteContact.type]: (state, { payload }) => state.filter(item => item.id !== payload),
});

export default itemReducer;
