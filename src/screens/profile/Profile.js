import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../../constant/Colors";

import CustomHeaderButton from "../../components/CustomHeaderButton";

export default Profile = () => {
  return (
    <View>
      <StatusBar animated backgroundColor={Colors.secondary} style="light" />
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export const ProfileOptions = ({ navigation }) => {
  return {
    headerTitle: "Profile",
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
