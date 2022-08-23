import * as React from 'react';
import Home from './Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Navigator;
