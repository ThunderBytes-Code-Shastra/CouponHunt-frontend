import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../../constant/Colors";

import {
  authIsAuthenticatedSelector,
  authNameSelector,
} from "../../store/auth/selector";

const { width, height } = Dimensions.get("screen");

export default Plus = ({ navigation }) => {
  const bannerCarousel = useRef();

  const isAuthenticated = useSelector(authIsAuthenticatedSelector);
  const name = useSelector(authNameSelector);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#FFF",
        }}
      >
        <Text>Plus</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export const PlusOptions = ({ navigation }) => {
  return {
    headerTitle: "Plus",
    // headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab3Secondary },
  };
};
