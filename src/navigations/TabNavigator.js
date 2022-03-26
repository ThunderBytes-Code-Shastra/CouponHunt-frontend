import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Entypo } from "@expo/vector-icons";

import Colors from "../constant/Colors";

import CategoriesNavigator from "../screens/categories";
import HomeNavigator from "../screens/home";
import ProfileNavigator from "../screens/profile";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.inactiveTabColor,
      }}
      backBehavior="initialRoute"
      initialRouteName="HomeNavigator"
    >
      <Tab.Screen
        name="CategoriesNavigator"
        component={CategoriesNavigator}
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="th-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
