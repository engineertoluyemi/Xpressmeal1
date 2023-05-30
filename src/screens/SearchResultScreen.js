import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";

// import { restaurants } from "../global/Data";
import SearchResultCard from "../components/SearchResultCard";
import { colors } from "../global/styles";
import { SCREEN_WIDTH } from "../global/styles";

const SearchResultScreen = ({ navigation, route }) => {
  const [restaurants, setRestaurants] = useState([]);

  // Restaurants``
  useEffect(() => {
    axios
      .get("http://192.168.103.38:8081/restaurants")
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{ backgroundColor: colors.white }}
          data={restaurants}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <SearchResultCard
              screenWidth={SCREEN_WIDTH}
              image={item.image}
              averageReview={item.averageReview}
              numberOfReview={item.numberOfReviews}
              restaurantName={item.restaurantName}
              distance={item.distance}
              businessAddress={item.businessAddress}
              productData={item.productData}
              OnPressRestaurantCard={() => {
                navigation.navigate("RestaurantHomeScreen", {
                  id: index,
                  restaurant: item.restaurantName,
                });
              }}
            />
          )}
          ListHeaderComponent={
            <View>
              <Text style={styles.listHeader}>
                {restaurants.length} Result for {route.params.item}
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    color: colors.gray1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontWeight: "bold",
  },
});
