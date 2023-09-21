import {createStore} from 'redux';
import calculatorReducer from '../reducer/reducers';

const store = createStore(calculatorReducer);

export default store;
