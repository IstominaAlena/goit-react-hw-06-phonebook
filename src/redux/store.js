// process - глобальная переменная в Node.js
// process.env.NODE_ENV - какая стадия проекта (девелопмент, продакшн...)

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import itemsReducer from './items/itemsReducer';
import filterReducer from './filter/filterReducer';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const contactsReduser = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, contactsReduser);

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
