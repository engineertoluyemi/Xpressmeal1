import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from "@rneui/base";
import CountDown from "react-native-countdown-component";

// import { categories } from "../global/Data";
import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../global/styles";
import FoodCart from "../components/FoodCart";
import axios from "axios";

const SCREEN_WIDTH = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");

  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);

  // Restaurants``
  useEffect(() => {
    axios
      .get("http://192.168.103.38:8081/restaurants")
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Fetch Categories
  useEffect(() => {
    axios
      .get("http://192.168.103.38:8081/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <HomeHeader title={"Menu"} navigation={navigation} />

      <ScrollView stickyHeaderIndices={[0]}>
        <View style={{ backgroundColor: colors.white, paddingBottom: 5 }}>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.primary : colors.gray5,
                }}
              >
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate("RestaurantsMapScreen");
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.gray5 : colors.primary,
                }}
              >
                <Text style={styles.deliveryText}>Pickup</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.gray1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>2, Oremejin Street, Ikeja</Text>
            </View>

            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.gray1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>Now</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              color={colors.gray1}
              name="tune"
              size={26}
            />
          </View>
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  setIndexCheck(item.id);
                }}
              >
                <View
                  style={
                    indexCheck === item.id
                      ? { ...styles.smallCardSelected }
                      : { ...styles.smallCard }
                  }
                >
                  <Image
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                    source={{ uri: item.image }}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? { ...styles.smallCardTextSelected }
                          : { ...styles.smallCardText }
                      }
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free delivery now</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                marginTop: -10,
                marginRight: 5,
              }}
            >
              Options changin in
            </Text>
            <CountDown
              until={3600}
              size={14}
              digitStyle={{ backgroundColor: colors.lightGreen }}
              digitTxtStyle={{ color: colors.white }}
              timeToShow={["M", "S"]}
              timeLabels={{ m: "Min", s: "Sec" }}
            />
          </View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={restaurants}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCart
                  screenWidth={SCREEN_WIDTH * 0.8}
                  restauranyImage={item.image}
                  restaurantName={item.restaurantName}
                  businessAddress={item.businessAddress}
                  distance={item.distance}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReviews}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotions available</Text>
        </View>

        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={restaurants}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCart
                  screenWidth={SCREEN_WIDTH * 0.5}
                  restauranyImage={item.image}
                  restaurantName={item.restaurantName}
                  businessAddress={item.businessAddress}
                  distance={item.distance}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReviews}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restarants close to you</Text>
        </View>

        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {restaurants.map((item) => (
            <View key={item.id} style={{ paddingBottom: 20 }}>
              <FoodCart
                screenWidth={SCREEN_WIDTH * 0.95}
                restauranyImage={item.image}
                restaurantName={item.restaurantName}
                businessAddress={item.businessAddress}
                distance={item.distance}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReviews}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {delivery && (
        <View style={styles.floatButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RestaurantsMapScreen");
            }}
          >
            <Icon
              type="material"
              name="place"
              size={32}
              color={colors.primary}
            />
            <Text style={{ color: colors.gray2 }}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  filterView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  clockView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  addressView: {
    flexDirection: "row",
    backgroundColor: colors.gray5,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginTop: 5,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  headerText: {
    color: colors.gray2,
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  headerTextView: {
    backgroundColor: colors.gray5,
    paddingVertical: 3,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.gray5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 85,
    margin: 10,
    height: 120,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 85,
    margin: 10,
    height: 120,
  },
  smallCardText: {
    fontWeight: "bold",
    color: colors.gray2,
    textAlign: "center",
  },
  smallCardTextSelected: {
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
  },
  floatButton: {
    position: "absolute",
    bottom: 10,
    right: 15,
    backgroundColor: colors.white,
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
  },
});
