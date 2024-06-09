import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screen/HomeScreen';
import StationFinderScreen from './Screen/StationFinderScreen';
import BookingConfirmationScreen from './Screen/BookingConfirmationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">
          
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="StationFinder" 
          component={StationFinderScreen} 
          options={{ title: 'Find a Charging Station' }}
        />

        <Stack.Screen 
          name="BookingConfirmation" 
          component={BookingConfirmationScreen} 
          options={{ title: 'Booking Confirmation' }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
