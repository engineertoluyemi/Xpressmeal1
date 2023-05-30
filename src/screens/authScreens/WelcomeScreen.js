import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { Button } from "@rneui/base";
import { colors, parameters } from "../../global/styles";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 3,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Text
          style={{ fontSize: 26, color: colors.primary, fontWeight: "bold" }}
        >
          DISCOVER RESTAURANTS
        </Text>
        <Text
          style={{ fontSize: 26, color: colors.primary, fontWeight: "bold" }}
        >
          IN YOUR AREA
        </Text>
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <Swiper autoplay={true} showsButtons={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: "https://cdn.auckland.ac.nz/aem/content/auckland/en/news/2019/09/10/calls-regulate-fast-food-heart-attack-alley/jcr:content/leftpar/imagecomponent/image.img.1024.medium.jpg/1568067560264.jpg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: "https://i.iheart.com/v3/re/assets.getty/5f908ed1c672403378adb5b3?ops=contain(1480,0)",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: "https://www.foodandwine.com/thmb/DmftW5om0u3uNKN65iTW4VAx4lc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/World-Record-For-Most-Fast-Food-Restaurants-Visited-In-24-Hours-FT-BLOG0822-2000-d7056cc418484e82a4f02066c34eae8a.jpg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View style={styles.slide4}>
            <Image
              source={{
                uri: "https://www.preciouscore.com/wp-content/uploads/2021/12/Jollof-Rice-With-Chicken-683x1024.jpg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View style={styles.slide5}>
            <Image
              source={{
                uri: "https://cdn.auckland.ac.nz/aem/content/auckland/en/news/2019/09/10/calls-regulate-fast-food-heart-attack-alley/jcr:content/leftpar/imagecomponent/image.img.1024.medium.jpg/1568067560264.jpg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
        </Swiper>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: "flex-end",
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.primaryButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => navigation.navigate("SignInScreen")}
          />
        </View>

        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <Button
            title="Cteate an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => navigation.navigate("SignUpScreen")}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#92BBD9",
  },
  slide4: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#92BBD9",
  },
  slide5: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#92BBD9",
  },

  createButton: {
    backgroundColor: colors.white,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
