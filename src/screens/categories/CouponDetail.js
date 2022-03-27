import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../../constant/Colors";

import CustomHeaderButton from "../../components/CustomHeaderButton";
import { useSelector } from "react-redux";

export default CouponDetail = ({ route }) => {
  const params = route.params;

  const coupon = useSelector((state) =>
    state.coupon.couponList.find((item) => item._id === params?.couponId)
  );

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.tab2Secondary,
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          position: "absolute",
          top: 180,
          bottom: 0,
          backgroundColor: "#fff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          width: "100%",
        }}
      />
      <View
        style={{
          width: "90%",
          zIndex: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginVertical: 8,
            backgroundColor: "#fff",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Image
                source={{ uri: coupon.img }}
                style={{ width: 100, height: 80, marginRight: 5 }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: "#333",
                  flexShrink: 1,
                  paddingRight: 5,
                  paddingTop: 10,
                }}
                lineBreakMode="clip"
              >
                {coupon.desc}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 15,
                aligncoupons: "center",
                paddingVertical: 5,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text>Expires</Text>
                <Text>{coupon.expiry}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export const CouponDetailOptions = ({ navigation }) => {
  return {
    headerTitle: "Coupon Detail",
    // headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab2Secondary },
  };
};
