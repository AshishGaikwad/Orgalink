import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../styles/Colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
  
  return (
    <Tab.Navigator  screenOptions={
      {
        tabBarShowLabel:false,
        tabBarStyle:{
          position:'absolute',
          bottom:20,
          left:20,
          right:20,
          elevation:7,
          height:70,
          borderRadius:14,
          backgroundColor:Colors.backgroundSecondaryColor,
        },
        tabBarActiveTintColor: Colors.textColorActive,
        tabBarInactiveTintColor: Colors.textSecondaryColor,
        tabBarShowLabel: false,


      }
    }>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={CategoryScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="gamepad-circle-outline"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />

      {/* <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              color={color}
              size={size}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};




export default BottomTabNavigator;
