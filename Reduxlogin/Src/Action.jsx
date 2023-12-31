// Actions
export const setPhoneNumber = (phoneNumber) => {
  return {
    type: 'SET_PHONE_NUMBER',
    payload: phoneNumber,
  };
};

export const setPasscode = (passcode) => {
  return {
    type: 'SET_PASSCODE',
    payload: passcode,
  };
};

export const setRegistrationData = (data) => {
  return {
    type: 'SET_REGISTRATION_DATA',
    payload: data,
  };
};

export const setVerificationStatus = (status) => {
  return {
    type: 'SET_VERIFICATION_STATUS',
    payload: status,
  };
};

export const getDataMethod = (data) => ({
  type: 'GET_DATA',
  payload: data,
});

export const verifyPasscode = () => {
  return { type: 'VERIFY_PASSCODE' };
};

export const navigateToScreen6 = () => {
  return { type: 'NAVIGATE_TO_SCREEN_6' };
};
