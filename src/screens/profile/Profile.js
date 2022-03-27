import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../constant/Colors";

import CustomHeaderButton from "../../components/CustomHeaderButton";

const sms = [
  {
    _id: "623fb01ffc4a3d4c5329f03e",
    bankName: "Swiggy",
    offer: "20 %",
    code: "SWIGGY20",
    desc: "Dear Customer, A special birthday offer just for you! Get 20% off on Swiggy. Use SWIGGY20 during checkout",
  },
  {
    _id: "623fb01ffc4a3d4c5329f031",
    bankName: "HDFC",
    offer: "Rs 1000",
    code: "HDFCNEWCODE",
    desc: "Dear Customer, A special birthday offer just for you! Get Rs 1000 off on HDFC. Use HDFCNEWCODE during checkout",
  },
  {
    _id: "623fb01ffc4a3d4c5329f032",
    bankName: "Biba",
    offer: "20 %",
    code: "FGKGHJ",
    desc: "Buy 1 get 1 free at any Biba outlet near you. Use FGKGHJ during checkout and keep shopping with us!!! T & C apply.",
  },
  {
    _id: "623fb01ffc4a3d4c5329f033",
    bankName: "zomato",
    offer: "20 %",
    code: "SWIGGY20",
    desc: "Dear Customer, A special birthday offer just for you! Get 20% off on Zomato. Use zomato15 during checkout",
  },
];

import {
  authAvatarSelector,
  authEmailSelector,
  authIsAuthenticatedSelector,
  authNameSelector,
  authPhoneSelector,
  authUsernameSelector,
} from "../../store/auth/selector";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { authLogout } from "../../store/auth/slice";

export const PersonalInfo = () => (
  <View style={{ flex: 1, backgroundColor: "#fff" }}></View>
);

const getDarkRandom = (idx) => {
  const colorList = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];

  // const i = Math.floor(Math.random() * 150);
  // const j = Math.floor(Math.random() * 150);
  // const k = Math.floor(Math.random() * 150);

  return colorList[idx % colorList.length];
};

export const ReadSMS = () => {
  return (
    <View style={{ backgroundColor: "#fff", marginTop: -10 }}>
      <Text style={{ textAlign: "center", fontSize: 25, fontStyle: "italic" }}>
        Your SMS
      </Text>
      <FlatList
        data={sms}
        keyExtractor={(item) => item._id}
        ListFooterComponent={<View style={{ height: 400 }} />}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              marginVertical: 8,
              backgroundColor: Colors.tab2Secondary,
              borderRadius: 10,
              overflow: "hidden",
              elevation: 6,
              marginHorizontal: 6,
              maxWidth: "85%",
              alignSelf: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text
                  style={{
                    color: "#fff",
                    flexShrink: 1,
                    paddingRight: 5,
                    paddingVertical: 10,
                    paddingLeft: 10
                  }}
                >
                  {item.desc}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 15,
                  alignItems: "center",
                  paddingVertical: 5,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#fff" }}>Provider</Text>
                  <Text style={{ color: "#fff" }}>{item.bankName}</Text>
                </View>
                <Pressable
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 15,
                    elevation: 6,
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      color: Colors.tab2Secondary,
                      paddingVertical: 15,
                      paddingHorizontal: 25,
                    }}
                  >
                    {item.code}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Profile = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Personal Info");

  const insets = useSafeAreaInsets();

  const isAuthenticated = useSelector(authIsAuthenticatedSelector);
  const avatar = useSelector(authAvatarSelector);
  const username = useSelector(authUsernameSelector);
  const name = useSelector(authNameSelector);
  const email = useSelector(authEmailSelector);
  const phone = useSelector(authPhoneSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) return null;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.tab4Secondary,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 24, color: Colors.primary }}>My Profile</Text>
        <TouchableOpacity onPress={() => dispatch(authLogout())}>
          <MaterialCommunityIcons
            name="logout"
            size={26}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: Colors.tab4Secondary,
          height: 250,
          paddingTop: 15,
          paddingHorizontal: 8,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: "#fff",
            borderRadius: 15,
            alignItems: "center",
            height: 150,
          }}
        >
          <View
            style={{
              transform: [{ translateY: -50 }],
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: avatar }}
              style={{
                width: 110,
                height: 110,
                borderRadius: 100,
                overflow: "hidden",
                borderColor: "#fff",
                borderWidth: 4,
                marginBottom: 6,
              }}
              resizeMode="cover"
            />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 16 }}>{email}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          marginTop: -20,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          // padding: 8,
        }}
      >
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity onPress={() => setSelectedTab("Personal Info")}>
            <Text
              style={[
                { fontSize: 18 },
                selectedTab === "Personal Info" && { fontWeight: "bold" },
              ]}
            >
              Personal Info
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("Read SMS")}>
            <Text
              style={[
                { fontSize: 18 },
                selectedTab === "Read SMS" && { fontWeight: "bold" },
              ]}
            >
              Reedem Code
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
      {/* {selectedTab === "Personal Info" ? <PersonalInfo /> : <ReadSMS />} */}

      <ReadSMS />

      {/* <View style={{ marginVertical: 10 }} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export const ProfileOptions = ({ navigation }) => {
  return {
    headerTitle: "Profile",
    // headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab4Secondary },
    headerTitleStyle: { fontSize: 24 },
  };
};
