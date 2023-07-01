import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 223,
    height: 64,
  },
});

const FIRSTImage = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Screen2');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          style={styles.logo}
          source={require('./FINAL-GAT-LOGO-DARK.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FIRSTImage;