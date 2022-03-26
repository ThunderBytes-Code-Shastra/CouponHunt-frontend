import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../../constant/Colors";

import CustomHeaderButton from "../../components/CustomHeaderButton";

import { authIsAuthenticatedSelector } from "../../store/auth/selector";
import { authLogout } from "../../store/auth/slice";

export default Home = ({ navigation }) => {
  const isAuthenticated = useSelector(authIsAuthenticatedSelector);

  const dispatch = useDispatch();

  return (
    <View>
      <StatusBar animated backgroundColor={Colors.secondary} style="light" />
      <Text>Home</Text>
      {isAuthenticated ? (
        <>
          <View style={{ marginVertical: 10 }} />
          <Button title="Logout" onPress={() => dispatch(authLogout())} />
        </>
      ) : (
        <>
          <View style={{ marginVertical: 10 }} />
          <Button title="Login" onPress={() => navigation.navigate("Login")} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export const HomeOptions = ({ navigation }) => {
  return {
    headerTitle: "Home",
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
