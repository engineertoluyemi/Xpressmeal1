import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantHeader from "../components/RestaurantHeader";
import { SCREEN_WIDTH, colors, fonts } from "../global/styles";
import { restaurantsData, menu } from "../global/Data";
import { Icon } from "@rneui/base";
import axios from "axios";
import { TabView, TabBar } from "react-native-tab-view";
import MenuScreen from "./RestaurantTabs/MenuScreen";
import InfoScreen from "./RestaurantTabs/InfoScreen";
import ReviewScreen from "./RestaurantTabs/ReviewScreen";
import GaleryScreen from "./RestaurantTabs/GaleryScreen";
import { TouchableOpacity } from "react-native";
import {
  Route1,
  Route2,
  Route3,
  Route4,
  Route5,
  Route6,
  Route7,
  Route8,
} from "./MenuTabs";

const initialLayout = SCREEN_WIDTH;
const RestaurantHomeScreen = ({ navigation, route }) => {
  const [restaurants, setRestaurants] = useState([]);
  const { id, restaurant } = route.params;

  // Restaurants
  useEffect(() => {
    axios
      .get("http://192.168.103.38:8081/restaurants")
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [routes2] = useState(menu);

  const [routes] = useState([
    { key: `first`, title: "MENU" },
    { key: `second`, title: "INFO" },
    { key: `third`, title: "REVIEWS" },
    { key: `fourth`, title: "GALERY" },
  ]);
  console.log(restaurantsData);
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.white }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );
  const renderTabBar2 = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.white }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );
  const menuPressed = () => {
    navigation.navigate("MenuProductScreen");
  };

  const UpdateRoute1 = () => {
    return <View></View>;
  };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 1:
        return <Route1 name={navigation} />;

      case 2:
        return <Route2 name={navigation} />;
      case 3:
        return <Route3 name={navigation} />;
      case 4:
        return <Route4 name={navigation} />;
      case 5:
        return <Route5 name={navigation} />;
      case 6:
        return <Route6 name={navigation} />;
      case 7:
        return <Route7 name={navigation} />;
      case 8:
        return <Route8 name={navigation} />;

      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RestaurantHeader id={id} navigation={navigation} />
          {restaurantsData[id].discount && (
            <View style={styles.view1}>
              <Text style={styles.text1}>
                GET {restaurantsData[id].discount}% OFF ON FOOD TOTAL
              </Text>
            </View>
          )}
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.text2}>
                {restaurantsData[id].restaurantName}
              </Text>
              <Text style={styles.text3}>{restaurantsData[id].foodType}</Text>
              <View style={styles.view4}>
                <Icon
                  name="star"
                  type="material-community"
                  color={colors.gray3}
                  size={15}
                />
                <Text style={styles.text4}>
                  {restaurantsData[id].averageReview}
                </Text>
                <Text style={styles.text5}>
                  {restaurantsData[id].numberOfReviews}
                </Text>
                <Icon
                  name="map-marker"
                  type="material-community"
                  color={colors.gray3}
                  size={15}
                />
                <Text style={styles.text6}>
                  {restaurantsData[id].distance} minute(s) away
                </Text>
              </View>
            </View>
            <View style={styles.view5}>
              <Text style={styles.text6}>Collect</Text>
              <View style={styles.view7}>
                <Text style={styles.text7}>
                  {restaurantsData[id].collectTime}
                </Text>
                <Text style={styles.text8}>min</Text>
              </View>
            </View>
            <View style={styles.view8}>
              <Text style={styles.text6}>Delivery</Text>
              <View style={styles.view9}>
                <Text style={styles.text9}>
                  {restaurantsData[id].deliveryTime}
                </Text>
                <Text style={styles.text11}>min</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.view10}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={UpdateRoute1}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>
        {index === 0 && <MenuScreen onPress={menuPressed} />}
        {index === 1 && <InfoScreen />}
        {index === 2 && <ReviewScreen />}
        {index === 3 && <GaleryScreen />}
      </ScrollView>
      <TouchableOpacity>
        <View style={styles.view11}>
          <View style={styles.view12}>
            <Text style={styles.text13}>View Cart</Text>
            <View style={styles.view13}>
              <Text style={styles.text13}>0</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    width: "100%",
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: colors.green,
    fontSize: 14,
    fontWeight: "bold",
  },
  view2: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  view3: {
    flex: 8,
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.gray1,
  },
  text3: {
    fontSize: 15,
    color: colors.gray3,
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  text4: {
    fontFamily: fonts.android.bold,
    fontSize: 13,
    color: colors.gray3,
    marginLeft: 2,
  },
  text5: {
    fontFamily: fonts.android.bold,
    fontSize: 13,
    color: colors.gray3,
    marginLeft: 2,
    marginRight: 5,
  },
  text6: {
    fontFamily: fonts.android.bold,
    fontSize: 13,
    color: colors.gray3,
    marginLeft: 0,
  },
  view5: {
    flex: 3,
    alignItems: "center",
  },
  text6: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.gray1,
  },
  view7: {
    width: 40,
    aspectRatio: 1,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-between",
  },
  text7: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.black,
    marginTop: 5,
  },
  text8: {
    fontSize: 13,
    color: colors.black,
    marginBottom: 5,
  },
  view8: {
    flex: 3,
    alignItems: "center",
  },
  text9: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.white,
  },
  view9: {
    width: 40,
    aspectRatio: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-around",
  },
  text10: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
    marginTop: 5,
  },
  text11: {
    fontSize: 13,
    color: colors.white,
    marginBottom: 5,
  },
  view10: {
    elevation: 10,
    backgroundColor: colors.pageBackground,
  },
  view11: {
    backgroundColor: colors.primary,
    height: 50,
    alignContent: "center",
    marginBottom: 0,
    justifyContent: "center",
  },
  view12: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text12: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.white,
  },
  view13: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: colors.white,
    borderRadius: 6,
    paddingBottom: 2,
  },
  text13: {
    paddingHorizontal: 3,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.white,
  },
  tab: {
    paddingTop: 10,
    backgroundColor: colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  tabLabel: {
    fontWeight: "bold",
    color: colors.white,
  },
  tabStyle: {
    width: SCREEN_WIDTH / 4,
    maxHeight: 45,
  },
  view14: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.primary,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
  },
  text14: {
    fontWeight: "bold",
    marginLeft: 40,
    color: colors.white,
    fontSize: 18,
  },
  view15: {
    marginTop: 5,
    paddingBottom: 0,
  },
});
