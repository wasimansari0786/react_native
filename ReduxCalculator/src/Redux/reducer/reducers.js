import {SET_RESULT} from '../action/actions';

const initialState = {
  result: '',
};

export default function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
}
