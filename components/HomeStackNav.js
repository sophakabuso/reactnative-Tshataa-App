import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import ProfileScreen from '../pages/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';



const HomeStackNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#26394D',
          borderTopColor: '#BABABA', // Corrected property name
        },
      }}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={(props) => <ProfileScreen {...props} />}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={(props) => <HomeScreen {...props} />}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={(props) => <HomeScreen {...props} />}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeStackNav;
