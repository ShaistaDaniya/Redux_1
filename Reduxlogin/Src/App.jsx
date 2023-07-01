import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './Store';
import FIRSTImage from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Screen1" component={FIRSTImage} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
