import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './Store';
import FIRSTImage from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import { getDataMethod } from './Action';
const Stack = createNativeStackNavigator();
const App = () => {
  const dispatch = useDispatch();
  const dataFromApi = useSelector(state => state.ApiReducer);
  console.log("dataFromRedux" + JSON.stringify(dataFromApi));
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch('https://fakestoreapi.com/products ');
    const data = await res.json();
    console.log('data ' + JSON.stringify(data));
    dispatch(getDataMethod(data))
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Screen1" component={FIRSTImage} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
          <Stack.Screen name="Screen4" component={Screen4} />
          <Stack.Screen name="Screen5" component={Screen5} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
