import { combineReducers } from 'redux';

const appReducer = (state = { phoneNumber: '' }, action) => {
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

const initialState = {
  passcode: ['', '', '', ''],
  passcodeError: false,
  wrongAttempts: 0,
  navigateToScreen6: false,
};

export const screen5Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VERIFY_PASSCODE':
      const correctPasscode = '1234'; // Need Replace with your own passcode
      if (state.passcode.join('') === correctPasscode) {
        return {
          ...state,
          passcodeError: false,
        };
      } else {
        const newWrongAttempts = state.wrongAttempts + 1;
        if (newWrongAttempts >= 2) {
          return {
            ...state,
            passcode: ['', '', '', ''],
            passcodeError: false,
            wrongAttempts: newWrongAttempts,
            navigateToScreen6: true,
          };
        } else {
          return {
            ...state,
            passcode: ['', '', '', ''],
            passcodeError: true,
            wrongAttempts: newWrongAttempts,
          };
        }
      }
    case 'NAVIGATE_TO_SCREEN_6':
      return {
        ...state,
        navigateToScreen6: true,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer,
  screen5: screen5Reducer,
});

export default rootReducer;
