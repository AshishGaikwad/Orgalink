import React from 'react';
import BottomTabNavigator from '../modules/BottomTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ViewScreen from './ViewScreen';
import ProductScreen from './ProductScreen';


const Stack = createNativeStackNavigator();
const MainScreen = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />

        <Stack.Screen
            name="ViewScreen"
            component={ViewScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ProductScreen"
            component={ProductScreen}
            options={{headerShown: false}}
          />


        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default MainScreen;
