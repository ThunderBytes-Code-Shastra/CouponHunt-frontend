import React, { useEffect, useRef } from "react";
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
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import SmsAndroid from "react-native-get-sms-android";
import Carousel from "react-native-snap-carousel";

import Colors from "../../constant/Colors";
import most_popular_coupuns from "../../../assets/most_popular_coupuns.jpg";

import CustomHeaderButton from "../../components/CustomHeaderButton";
import {
  authIsAuthenticatedSelector,
  authNameSelector,
} from "../../store/auth/selector";
import { getCoupon } from "../../store/coupon/slice";

const BannerData = [
  {
    _id: "0",
    name: "Axis Bank",
    thumbnail:
      "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/personal-banking/offers/offer-page-banner-myntra-desktop-25-05.jpg?h=400&iar=0&w=1920&hash=7F26A2A5F8461902D859025C1416FB5B",
  },
  {
    _id: "1",
    name: "Axis Bank",
    thumbnail:
      "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/personal-banking/offers/make-mytrip-offer-page-banner-desktop.jpg?h=400&iar=0&w=1920&hash=1D8D269DC4F8A7D2E6299716601FC6EA",
  },
  {
    _id: "2",
    name: "Axis Bank",
    thumbnail:
      "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/personal-banking/offers/offer-page-banner-zomato-desktop.jpg?h=400&iar=0&w=1920&hash=5EC4DCD68E1B1B2F95D89C42A0B2D707",
  },
];

const data1 = [
  {
    _id: "0",
    img: "https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg",
    offer: "15%",
  },
  {
    _id: "1",
    img: "https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg",
    offer: "₹400",
  },
  {
    _id: "2",
    img: "https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg",
    offer: "13%",
  },
  {
    _id: "3",
    img: "https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg",
    offer: "29%",
  },
];

const data2 = [
  {
    _id: "4",
    img: "https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg",
    offer: "₹257",
  },
  {
    _id: "5",
    img: "https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg",
    offer: "₹257",
  },
  {
    _id: "6",
    img: "https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg",
    offer: "₹257",
  },
  {
    _id: "7",
    img: "https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg",
    offer: "₹257",
  },
];

const { width, height } = Dimensions.get("screen");

export default Home = ({ navigation }) => {
  const isAuthenticated = useSelector(authIsAuthenticatedSelector);
  const homeCouponList = useSelector((state) => state.coupon.homeCouponList);
  const name = useSelector(authNameSelector);

  const dispatch = useDispatch();

  const getMessages = () => {
    /* List SMS messages matching the filter */
    var filter = {
      box: "inbox", // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all

      /**
       *  the next 3 filters can work together, they are AND-ed
       *
       *  minDate, maxDate filters work like this:
       *    - If and only if you set a maxDate, it's like executing this SQL query:
       *    "SELECT * from messages WHERE (other filters) AND date <= maxDate"
       *    - Same for minDate but with "date >= minDate"
       */
      // minDate: 1554636310165, // timestamp (in milliseconds since UNIX epoch)
      // maxDate: 1556277910456, // timestamp (in milliseconds since UNIX epoch)
      // bodyRegex: '(.*)How are you(.*)', // content regex to match

      /** the next 5 filters should NOT be used together, they are OR-ed so pick one **/
      read: 1, // 0 for unread SMS, 1 for SMS already read
      // _id: 1234, // specify the msg id
      // thread_id: 12, // specify the conversation thread_id
      // address: '+1888------', // sender's phone number
      // body: 'How are you', // content to match
      /** the next 2 filters can be used for pagination **/
      indexFrom: 0, // start from index 0
      maxCount: 600, // count of SMS to return each time
    };

    SmsAndroid.list(
      JSON.stringify(filter),
      (fail) => {
        console.log("SMS read Failed with this error: " + fail);
      },
      (count, smsList) => {}
    );
  };

  useEffect(() => {
    dispatch(getCoupon({ isHomeScreen: true }));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: width * 0.92,
          height: 150,
          borderRadius: 15,
          marginHorizontal: 16,
          marginVertical: 12,
          overflow: "hidden",
          backgroundColor: "#fff",
          elevation: 12,
        }}
      >
        <Image
          source={{ uri: item.thumbnail }}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#FFF",
        }}
      >
        <View
          style={{
            backgroundColor: "lavender",
            borderRadius: 15,
            margin: 8,
            padding: 4,
            elevation: 8,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontWeight: "bold",
              paddingLeft: 8,
              paddingVertical: 10,
            }}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            Hola {isAuthenticated ? name : "Anonymous"}!
          </Text>
        </View>
        <View>
          <FlatList
            data={BannerData}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>

        <View
          style={{ flexDirection: "row", flexWrap: "wrap", marginVertical: 12 }}
        >
          {homeCouponList.slice(0, 4).map((item) => (
            <View
              key={item._id}
              style={{
                width: width * 0.45,
                backgroundColor: "#fff",
                elevation: 8,
                margin: 8,
                borderRadius: 15,
                overflow: "hidden",
                paddingVertical: 12,
              }}
            >
              <Image
                source={{ uri: item.img }}
                style={{ width: "90%", height: 90 }}
                resizeMode="contain"
              />
              <Text style={{ textAlign: "center", fontSize: 18 }}>
                {item.offer} Off
              </Text>
            </View>
          ))}

          {/* <View
            style={{
              width: width * 0.45,
              backgroundColor: "#fff",
              elevation: 8,
              margin: 8,
              borderRadius: 15,
              overflow: "hidden",
              paddingVertical: 10,
              backgroundColor: Colors.primary,
            }}
          ></View> */}
        </View>
        <View
          style={{
            marginHorizontal: 8,
            borderRadius: 15,
            overflow: "hidden",
            elevation: 8,
          }}
        >
          <Image
            source={most_popular_coupuns}
            style={{ width, height: 80 }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{ flexDirection: "row", flexWrap: "wrap", marginVertical: 12 }}
        >
          {homeCouponList.slice(4).map((item) => (
            <View
              key={item._id}
              style={{
                width: width * 0.45,
                backgroundColor: "#fff",
                elevation: 8,
                margin: 8,
                borderRadius: 15,
                overflow: "hidden",
                paddingVertical: 12,
              }}
            >
              <Image
                source={{ uri: item.img }}
                style={{ width: "90%", height: 90 }}
                resizeMode="contain"
              />
              <Text style={{ textAlign: "center", fontSize: 18 }}>
                {item.offer} Off
              </Text>
            </View>
          ))}
        </View>
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

export const HomeOptions = ({ navigation }) => {
  return {
    headerTitle: "Home",
    // headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab1Secondary },
  };
};
