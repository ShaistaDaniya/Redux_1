import { combineReducers } from 'redux';
import APIReducer from './APIReducer';

const initialState = {
  phoneNumber: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PHONE_NUMBER':
      return {
        ...state,
        phoneNumber: action.payload,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  app: appReducer,
  api: APIReducer,
});



export default reducer;