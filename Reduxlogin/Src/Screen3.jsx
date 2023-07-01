import React, { useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setVerificationStatus } from './Action';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verify: {
    fontSize: 20,
  },
});

const Screen3 = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setVerificationStatus('verifying'));

    // Verification process
    const timer = setTimeout(() => {
      dispatch(setVerificationStatus('verified'));
      navigation.navigate('Screen4');
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.verify}>Verifying phone number</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Screen3;
