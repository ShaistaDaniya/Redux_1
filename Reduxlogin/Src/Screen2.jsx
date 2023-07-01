import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setPhoneNumber } from './Action';

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
  register: {
    width: 227,
    height: 28,
    marginTop: 60,
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 28,
  },
  regview: {
    fontSize: 16,
  },
  num: {
    height: 56,
    borderColor: 'blue',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    margin: 16,
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
  },
  activeButton: {
    marginTop: 23,
    backgroundColor: 'darkblue',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 42,
    margin: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    padding: 12,
    fontSize: 16,
    lineHeight: 19.92,
    marginLeft: 16,
    marginRight: 16,
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

const Screen2 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.phoneNumber);

  const handleTap = () => {
    console.log('Tapped');
  };

  const handleNextButton = () => {
    if (phoneNumber.length === 10) {
      navigation.navigate('Screen3');
    }
  };

  useEffect(() => {
    dispatch(setPhoneNumber(phoneNumber));
  }, [dispatch, phoneNumber]);

  const handlePhoneNumberChange = (text) => {
    const formattedNumber = text.replace(/[^0-9]/g, '');
    dispatch(setPhoneNumber(formattedNumber));
  };

  const handleSupportTextPress = () => {
    const supportURL = ''; // Replace with your contact web page URL
    Linking.openURL(supportURL);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleTap}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./FINAL-GAT-LOGO-DARK.png')}
        />
        <View style={styles.regview}>
          <Text style={styles.register}>Your Registered Phone Number:</Text>
          <TextInput
            style={styles.num}
            keyboardType="phone-pad"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            maxLength={10}
          />
          <TouchableOpacity
            style={phoneNumber.length === 10 ? styles.activeButton : styles.button}
            onPress={handleNextButton}
            disabled={phoneNumber.length !== 10}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            By proceeding, you consent to get SMS messages including by automated means, from Gig and Take and its affiliates
            to the phone number provided
          </Text>
          <Text style={styles.Need}>Need help?</Text>
          <Text style={styles.supportText} onPress={handleSupportTextPress}>
            Contact for support
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Screen2;
