import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../../constant/Colors";

import CustomHeaderButton from "../../components/CustomHeaderButton";
import { random } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getCoupon } from "../../store/coupon/slice";
import Skeleton from "../../components/Skeleton";

// const data = [
//   {
//     _id: "623f723d1e75fc92d8049184",
//     bankName: "SBI Card Offers",
//     offer: " Rs.1000 ",
//     desc: "Domestic Flights - Grab ₹1000 OFF + Extra ₹800 SuperCash",
//     code: "MMTFLIGHT",
//     tnc: "Grab Up to 6% OFF on flights.\n\tThe maximum discount that you can avail is Rs 1000.\n\tOffer is applicable for both one-way and return flight ticket booking.\n\tThe coupon cannot be used when you are using MMT Gift Cards or My Wallet.",
//     companyname: "MakeMyTrip",
//     img: "https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg",
//     offerType: 0,
//     offerVal: 50,
//     cardType: "Credit & Debit Cards",
//     isDeal: 1,
//   },
//   {
//     _id: "623aa23d1e75fc92d8049184",
//     bankName: "SBI Card Offers",
//     offer: " Rs.1000 ",
//     desc: "Domestic Flights - Grab ₹1000 OFF + Extra ₹800 SuperCash",
//     code: "MMTFLIGHT",
//     tnc: "Grab Up to 6% OFF on flights.\n\tThe maximum discount that you can avail is Rs 1000.\n\tOffer is applicable for both one-way and return flight ticket booking.\n\tThe coupon cannot be used when you are using MMT Gift Cards or My Wallet.",
//     companyname: "MakeMyTrip",
//     img: "https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg",
//     offerType: 1,
//     offerVal: 50,
//     cardType: "Credit & Debit Cards",
//     isDeal: 1,
//   },
//   {
//     _id: "623f7323d1e75fc92d8044184",
//     bankName: "SBI Card Offers",
//     offer: " Rs.1000 ",
//     desc: "Domestic Flights - Grab ₹1000 OFF + Extra ₹800 SuperCash",
//     code: "MMTFLIGHT",
//     tnc: "Grab Up to 6% OFF on flights.\n\tThe maximum discount that you can avail is Rs 1000.\n\tOffer is applicable for both one-way and return flight ticket booking.\n\tThe coupon cannot be used when you are using MMT Gift Cards or My Wallet.",
//     companyname: "MakeMyTrip",
//     img: "https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg",
//     offerType: 0,
//     offerVal: 50,
//     cardType: "Credit & Debit Cards",
//     isDeal: 0,
//   },
// ];

const getDarkRandom = (idx) => {
  const colorList = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];

  // const i = Math.floor(Math.random() * 150);
  // const j = Math.floor(Math.random() * 150);
  // const k = Math.floor(Math.random() * 150);

  return colorList[idx % colorList.length];
};

export default CouponList = ({ route }) => {
  const params = route.params;

  const data = useSelector((state) => state.coupon.couponList);
  const loading = useSelector((state) => state.coupon.loadingCoupon);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoupon({ bankName: params?.name }));
  }, [params]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Skeleton />
      </View>
    );
  }

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
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          ListHeaderComponent={<View style={{ height: 100 }} />}
          ListFooterComponent={<View style={{ height: 50 }} />}
          ListEmptyComponent={<View>No Offers Found for {params?.name}</View>}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: "row",
                marginVertical: 8,
                backgroundColor: "#fff",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  backgroundColor: getDarkRandom(index),
                  minHeight: 100,
                  minWidth: 50,
                  justifyContent: "center",
                  paddingVertical: 60,
                }}
              >
                <Text
                  style={{
                    transform: [{ rotate: "-90deg" }],
                    fontSize: 20,
                    color: "#fff",
                  }}
                >
                  {item.isDeal ? "Deal" : "Offer"}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <Image
                    source={{ uri: item.img }}
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
                    <Text>Expires</Text>
                    <Text>{item.expiry}</Text>
                  </View>
                  <Pressable
                    style={{
                      backgroundColor: Colors.tab2Secondary,
                      borderRadius: 15,
                    }}
                    onPress={() => {}}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        paddingVertical: 15,
                        paddingHorizontal: 25,
                      }}
                    >
                      Reedem
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export const CouponListOptions = ({ navigation, route }) => {
  return {
    headerTitle: route.params.name,
    headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab2Secondary, elevation: 0 },
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Back"
          color={Colors.primary}
          iconName="caret-back"
          onPress={() => navigation.goBack()}
        />
      </HeaderButtons>
    ),
  };
};
