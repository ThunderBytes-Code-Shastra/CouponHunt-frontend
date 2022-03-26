import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/CustomHeaderButton";

import Colors from "../../constant/Colors";

export default AllCategories = () => {
  return (
    <View>
      <StatusBar animated backgroundColor={Colors.secondary} style="light" />
      <Text>AllCategories</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export const AllCategoriesOptions = ({ navigation }) => {
  return {
    headerTitle: "Categories",
    headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.secondary },
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="drawer"
          color={Colors.primary}
          iconName="ios-reorder-three"
          onPress={() => navigation.openDrawer()}
        />
      </HeaderButtons>
    ),
  };
};
