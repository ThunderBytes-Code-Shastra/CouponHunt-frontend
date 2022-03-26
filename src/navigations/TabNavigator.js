import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function TabNavigator({ navigation }) {
  return (
    <View style={{ padding: 50 }}>
      <Text>TabNavigator</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

const styles = StyleSheet.create({});
