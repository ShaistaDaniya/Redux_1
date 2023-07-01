import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setScreenAndRegisterStatus } from './Action';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 223,
    height: 64,
    flexGrow: 0,
  },
  register: {
    width: 283,
    height: 'auto',
    marginTop: 60,
    marginLeft: 46,
    marginRight: 46,
    fontSize: 16,
    lineHeight: 25,
  },
  regview: {
    fontSize: 16,
  },
  txt: {
    height: 'auto',
    marginTop: 20,
    marginLeft: 46,
    marginRight: 46,
    fontSize: 16,
    lineHeight: 23,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 23,
  },
  button1: {
    backgroundColor: 'white',
    color: 'darkblue',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 5,
    borderColor: 'darkblue',
    height: 42,
    flex: 1,
    borderWidth: 2,
    marginHorizontal: 8,
  },
  button2: {
    backgroundColor: 'darkblue',
    color: 'white',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 5,
    borderColor: 'darkblue',
    height: 42,
    flex: 1,
    marginHorizontal: 3,
  },
  buttonText1: {
    color: 'darkblue',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  buttonText2: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  Need: {
    padding: 10,
    fontSize: 16,
    lineHeight: 19.92,
    textAlign: 'center',
    marginTop: 248,
  },
  supportText: {
    padding: 10,
    fontSize: 16,
    lineHeight: 19.92,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

const Screen4 = ({ navigation }) => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.phoneNumber);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Screen5');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const handleNextButton = () => {
    dispatch(setScreenAndRegisterStatus('Screen2', 'registered'));
  };

  const handleSupportTextPress = () => {
    const supportURL = ''; // Replace with your contact web page URL
    Linking.openURL(supportURL);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./FINAL-GAT-LOGO-DARK.png')}
      />
      <PhoneNumberInput phoneNumber={phoneNumber} handleNextButton={handleNextButton} handleSupportTextPress={handleSupportTextPress} />
    </View>
  );
};

const PhoneNumberInput = ({ phoneNumber, handleNextButton, handleSupportTextPress }) => {
  return (
    <View style={styles.regview}>
      <Text style={styles.register}>
        Your mobile number +91 {phoneNumber} is not registered with us!
      </Text>
      <Text style={styles.txt}>
        We have currently enrolled limited people. If you are interested in getting flexible factory jobs, please register
        your interest and we will get back to you
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={handleNextButton}>
          <Text style={styles.buttonText1}>Return To Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleNextButton}>
          <Text style={styles.buttonText2}>Register Now</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.Need}>Need help?</Text>
      <Text style={styles.supportText} onPress={handleSupportTextPress}>
        Contact for support
      </Text>
    </View>
  );
};

export default Screen4;
