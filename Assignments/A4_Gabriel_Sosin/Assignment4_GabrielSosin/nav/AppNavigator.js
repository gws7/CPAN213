import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ParkingListScreen from '../screens/ParkingListScreen';

// Create a stack navigator
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ParkingList">
        <Stack.Screen 
          name="ParkingList" 
          component={ParkingListScreen} 
          options={{ title: 'Parking List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
