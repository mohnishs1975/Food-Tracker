import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AddRecipes from '../screens/AddRecipes';
import SignOut from '../screens/SignOut';


const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddRecipes" component={AddRecipes} />
      <Stack.Screen name="SignOut" component={SignOut} />
    </Stack.Navigator>
  );
}
