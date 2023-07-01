import { ActionTypes } from './actions';

const initialState = {
  phoneNumber: '',
  passcode: ['', '', '', ''],
  passcodeError: false,
  wrongAttempts: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PHONE_NUMBER':
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case ActionTypes.SET_PASSCODE:
      return {
        ...state,
        passcode: action.passcode,
      };
    case ActionTypes.SET_PASSCODE_ERROR:
      return {
        ...state,
        passcodeError: action.passcodeError,
      };
    case ActionTypes.INCREMENT_WRONG_ATTEMPTS:
      return {
        ...state,
        wrongAttempts: state.wrongAttempts + 1,
      };
    default:
      return state;
  }
};

export default reducer;
