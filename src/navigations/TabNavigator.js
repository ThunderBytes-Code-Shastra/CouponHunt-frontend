import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";

import Colors from "../constant/Colors";

import CategoriesNavigator from "../screens/categories";
import HomeNavigator from "../screens/home";
import ProfileNavigator from "../screens/profile";
import BookmarkNavigator from "../screens/bookmark";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        // tabBarActiveTintColor: Colors.secondary,
        // tabBarInactiveTintColor: Colors.inactiveTabColor,
        // tabBarColor:"#1744e8"
      }}

      backBehavior="initialRoute"
      initialRouteName="Bookmark"
    >
    <Tab.Screen
      name="HomeNavigator"
      component={HomeNavigator}
      options={{
        tabBarColor: Colors.tab1Secondary,
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <Entypo name="home" size={24} color={color} />
        ),
      }}
    />
      <Tab.Screen
        name="CategoriesNavigator"
        component={CategoriesNavigator}
        options={{
        tabBarColor:Colors.tab2Secondary,
        tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="th-list" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="BookmarkNavigator"
        component={BookmarkNavigator}
        options={{
        tabBarColor:Colors.tab3Secondary,
        tabBarLabel: "Bookmark",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmarks" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
        tabBarColor:Colors.tab4Secondary,
        tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
