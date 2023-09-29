// store.js

import {createStore, combineReducers} from 'redux';
import cartReducer from '../reducer/reducers'; // Import your updated cartReducer

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers as needed
});

const store = createStore(rootReducer);

export default store;
