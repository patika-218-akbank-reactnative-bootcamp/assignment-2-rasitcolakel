import * as React from 'react';
import Home from './Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from './ChatScreen';
import {Chat as ChatType} from '../assets/messages';

export type RootStackParamList = {
  Home: undefined;
  ChatScreen: {chat: ChatType};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

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
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
