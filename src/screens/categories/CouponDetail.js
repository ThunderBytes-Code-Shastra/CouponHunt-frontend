import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../../constant/Colors";

import CustomHeaderButton from "../../components/CustomHeaderButton";

export default CouponDetail = () => {
  return (
    <View>
      <StatusBar style="light" />
      <Text>CouponDetail</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export const CouponDetailOptions = ({ navigation }) => {
  return {
    headerTitle: "Coupon Detail",
    // headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab4Secondary },
  };
};