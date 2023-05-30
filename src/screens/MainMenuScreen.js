import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { SCREEN_HEIGHT, colors } from "../global/styles";
import { Image } from "react-native";
import { Icon, withBadge } from "@rneui/base";

const BadgeIcon = withBadge(0)(Icon);

const MainMenuScreen = ({ navigation, type, title }) => {
  return (
    <View style={styles.container}>
      <Header title="MY PROFILE" type="arrow-left" navigation={navigation} />
      <ScrollView>
        {/* Header Section */}
        <View
          style={{
            backgroundColor: colors.primary,
            height: 60,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/user.png")}
              style={{ height: 50, aspectRatio: 1, tintColor: colors.white }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingLeft: 10,
            }}
          >
            <Text
              style={{ color: colors.white, fontWeight: "bold", fontSize: 20 }}
            >
              Charles User
            </Text>
            <Text style={{ color: colors.white }}>email@email.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingRight: 10 }}>
            <BadgeIcon
              type="material-community"
              name="cart"
              size={28}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
        {/* Header Section End */}

        <View
          style={{
            justifyContent: "space-between",
          }}
        >
          <View>
            <TouchableOpacity style={styles.menuContainer}>
              <Icon
                name="home"
                type="material"
                color={colors.gray3}
                size={35}
                style={{ paddingRight: 20 }}
              />
              <Text style={styles.menuText}>Client Stack</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.menuContainer}>
            <Text style={styles.menuText}>Business Console</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuContainer}>
            <Text style={styles.menuText}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuContainer}>
            <Text style={styles.menuText}>Promotions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuContainer}>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuContainer}>
            <Text style={styles.menuText}>Help</Text>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: colors.gray4,
              }}
            >
              Preferences
            </Text>
            <TouchableOpacity style={styles.menuContainer}>
              <Text style={styles.menuText}>Client Stack</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.footerContainer}>
        <Icon
          name="logout"
          type="material"
          color={colors.gray3}
          size={35}
          style={{ paddingRight: 5 }}
        />
        <Text style={styles.menuText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainMenuScreen;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.97,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginVertical: 15,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.gray2,
  },
});
