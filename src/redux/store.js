import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import itemsReducer from './items/itemsReducer';

// const reducer = (state = { a: 21 }, action) => {
//   switch (action.type) {
//     case 'add_5':
//       return { a: state.a + 5 };
//     case 'remove_32':
//       return { a: state.a - 32 };
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  //   objA: reducer,
  items: itemsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
