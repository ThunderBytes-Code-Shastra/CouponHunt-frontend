import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/CustomHeaderButton";

import Colors from "../../constant/Colors";

export default AllCategories = () => {
  return (
    <View>
      <StatusBar style="light" />
      <Text>AllCategories</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export const AllCategoriesOptions = ({ navigation }) => {
  return {
    headerTitle: "Categories",
    // headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab4Secondary },
  };
};
