import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchComponent from "../components/SearchComponent";
// import { categories } from "../global/Data";
import { colors, parameters } from "../global/styles";
import { TouchableWithoutFeedback } from "react-native";
import { ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

const SCREEN_WIDTH = Dimensions.get("window").width;

const SearchScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  // Fetch Categories
  useEffect(() => {
    axios
      .get("http://192.168.103.38:8081/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <SearchComponent />
      <View style={{ marginBottom: 10 }}>
        <FlatList
          style={{ marginBottom: 1 }}
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("SearchResultScreen", { item: item.name });
              }}
            >
              <View style={styles.imageView}>
                <ImageBackground
                  style={styles.image}
                  source={{ uri: item.image }}
                >
                  <View style={styles.textView}>
                    <Text style={{ color: colors.white }}>{item.name}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text style={styles.listHeader}>Top Categories</Text>
          }
          ListFooterComponent={<Footer />}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const Footer = () => {
  const [categories, setCategories] = useState([]);

  // Fetch Categories
  useEffect(() => {
    axios
      .get("http://192.168.103.38:8081/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={{ marginBottom: 10 }}>
      <FlatList
        style={{ marginBottom: 10 }}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("SearchResultScreen", { item: item.name });
            }}
          >
            <View style={styles.imageView}>
              <ImageBackground
                style={styles.image}
                source={{ uri: item.image }}
              >
                <View style={styles.textView}>
                  <Text style={{ color: colors.white }}>{item.name}</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        )}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={
          <Text style={styles.listHeader}>More Categories</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },
  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },
  listHeader: {
    fontSize: 16,
    color: colors.gray2,
    paddingBottom: 10,
    marginLeft: 12,
  },
  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.transparentDark,
  },
});
