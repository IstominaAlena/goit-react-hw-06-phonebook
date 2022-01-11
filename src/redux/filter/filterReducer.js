import { createReducer } from '@reduxjs/toolkit';

import { filterContacts } from '../filter/filterAction';

const filterReducer = createReducer('', {
  [filterContacts.type]: (_, { payload }) => payload,
});

export default filterReducer;
