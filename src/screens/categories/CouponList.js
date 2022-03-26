import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../../constant/Colors";

import CustomHeaderButton from "../../components/CustomHeaderButton";

export default CouponList = () => {
  return (
    <View>
      <StatusBar style="light" />
      <Text>CouponList</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export const CouponListOptions = ({ navigation }) => {
  return {
    headerTitle: "Health & Immunity",
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
