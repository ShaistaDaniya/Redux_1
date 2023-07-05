import React, { useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { verifyPasscode, navigateToScreen6 } from './redux/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 223,
    height: 64,
    flex: 0,
    order: 0,
    flexGrow: 0,
  },
  enter: {
    width: 'auto',
    height: 'auto',
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
    fontSize: 16,
    lineHeight: 18,
  },
  prevnum: {
    width: 'auto',
    height: 'auto',
    marginLeft: 105,
  },
  regview: {
    fontSize: 16,
  },
  button: {
    marginTop: 23,
    backgroundColor: 'lightgray',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 42,
    margin: 16,
    width: 212,
    marginLeft: 82,
    marginRight: 82,
  },
  buttonDarkBlue: {
    backgroundColor: 'darkblue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  passcodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  passcodeBox: {
    flex: 0,
    height: 56,
    width: 46,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 0,
    marginHorizontal: 8,
    marginLeft: 1,
  },
  selectedPasscodeBox: {
    borderColor: 'darkblue',
    borderWidth: 2,
  },
  filledPasscodeBox: {
    borderColor: 'darkblue',
    borderWidth: 1,
  },
  filledPasscodeBoxError: {
    borderColor: 'red',
    borderWidth: 2,
  },
  resend: {
    fontSize: 16,
    marginLeft: 124,
    marginRight: 94,
    marginBottom: 298,
    width: 'auto',
    height: 'auto',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 8,
  },
});

const Screen5 = ({ passcode, passcodeError, wrongAttempts, verifyPasscode, navigateToScreen6 }) => {
  const [passcode, setPasscode] = useState(['', '', '', '']);
  const passcodeInputs = useRef([]);

  const handlePasscodeChange = (index, value) => {
    const updatedPasscode = [...passcode];
    updatedPasscode[index] = value;
    setPasscode(updatedPasscode);

    if (!value && index > 0) {
      passcodeInputs.current[index - 1].focus();
    } else if (value && index < passcodeInputs.current.length - 1) {
      passcodeInputs.current[index + 1].focus();
    }

    if (index === 3 && !value && updatedPasscode.join('') === '') {
      console.log('Navigating to Screen6');
      setTimeout(() => {
        navigateToScreen6();
      }, 3000);
    }
  };

  const handleVerifyPasscode = () => {
    verifyPasscode();
  };

  return (
    <View style={styles.container}>
    <Image
    style={styles.logo}
    source={require('./FINAL-GAT-LOGO-DARK.png')}
     />
      <Text style={styles.enter}>Enter the passcode</Text>
      <View style={styles.passcodeContainer}>
        {passcode.map((digit, index) => (
          <TextInput
            key={index}
            style={[
              styles.passcodeBox,
              digit ? styles.filledPasscodeBox : null,
              passcodeError ? styles.filledPasscodeBoxError : null,
            ]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => handlePasscodeChange(index, value)}
            value={digit}
            ref={(input) => (passcodeInputs.current[index] = input)}
          />
        ))}
      </View>
      {passcodeError && <Text style={styles.errorText}>Incorrect passcode. Try again.</Text>}
      <TouchableOpacity
        style={[styles.button, passcode.join('') === '' ? null : styles.buttonDarkBlue]}
        onPress={handleVerifyPasscode}
      >
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <Text style={styles.resend} onPress={() => Linking.openURL('http://www.example.com')}>Resend code</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  passcode: state.passcode,
  passcodeError: state.passcodeError,
  wrongAttempts: state.wrongAttempts,
});

const mapDispatchToProps = (dispatch) => ({
  verifyPasscode: () => dispatch(verifyPasscode()),
  navigateToScreen6: () => dispatch(navigateToScreen6()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen5);
