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
